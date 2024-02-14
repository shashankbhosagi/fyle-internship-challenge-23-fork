import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
})
export class MainContentComponent {
  username: string = '';
  reposPerPageOptions: number[] = [10, 15, 20, 25, 30, 35, 40, 45, 50, 100];

  isLoading: boolean = false;
  isUserLoading: boolean = false;
  btnClicked: boolean = false;
  searchInitialSuccess: boolean = false;

  userData: any;
  userExist: boolean = true;
  emptyUsername: boolean = false;

  currentPage: number = 1;
  totalRepo: number = 0;
  reposPerPage: number = 10;
  repos: any[] = [];

  constructor(private apiService: ApiService) {}

  private apiCallsCache: { [key: string]: any } = {};

  private isapiCallCached(
    username: string,
    page: number,
    reposPerPage: number
  ): boolean {
    return (
      this.apiCallsCache[
        `${username}-page${page}-repoperpage${reposPerPage}`
      ] !== undefined
    );
  }

  private getCachedApiCall(
    username: string,
    page: number,
    reposPerPage: number
  ) {
    return this.apiCallsCache[
      `${username}-page${page}-repoperpage${reposPerPage}`
    ];
  }

  private setCacheApiCall(
    username: string,
    page: number,
    reposPerPage: number
  ) {
    this.apiCallsCache[`${username}-page${page}-repoperpage${reposPerPage}`] =
      this.repos;
  }

  searchRepos() {
    if (this.username && this.username.trim() !== '') {
      this.isLoading = true;
      this.isUserLoading = true;
      this.btnClicked = true;
      this.apiService.getUser(this.username).subscribe({
        next: (res: any) => {
          this.userData = res;
          this.currentPage = 1;
          this.totalRepo = res.public_repos;
          this.loadRepos();
          this.userExist = true;
          this.searchInitialSuccess = true;
        },
        error: (err) => {
          if (err.status === 404) {
            this.isLoading = false;
            this.isUserLoading = false;
            this.userExist = false;
            this.totalRepo = 0;
            this.resetRepos();
          }
        },
      });
    }
  }

  loadRepos(): void {
    if (
      this.isapiCallCached(this.username, this.currentPage, this.reposPerPage)
    ) {
      this.repos = this.getCachedApiCall(
        this.username,
        this.currentPage,
        this.reposPerPage
      );
      this.isUserLoading = false;
      this.isLoading = false;
      return;
    } else {
      this.apiService
        .getRepos(this.username, this.currentPage, this.reposPerPage)
        .subscribe({
          next: (repos: any) => {
            setTimeout(() => {
              this.repos = repos;
              this.isUserLoading = false;
              this.isLoading = false;
              this.setCacheApiCall(
                this.username,
                this.currentPage,
                this.reposPerPage
              );
            }, 400);
          },
          error: (error: any) => {
            console.error(error);
            this.isLoading = false;
          },
        });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.isUserLoading = false;
    this.isLoading = true;

    this.loadRepos();
  }

  onReposPerPageChange(newPerPage: number) {
    this.currentPage = 1;
    this.reposPerPage = newPerPage;
    this.isUserLoading = false;
    this.isLoading = true;
    this.loadRepos();
  }
  handleUsername(username: string) {
    if (username === '') {
      this.btnClicked = false;
      this.userExist = false;
      return;
    }
    this.username = username;
    this.searchRepos();

    this.btnClicked = true;
  }

  resetRepos() {
    this.repos = [];
    this.userData = null;
    this.username = '';
  }
}
