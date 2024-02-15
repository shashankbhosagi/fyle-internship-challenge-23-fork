import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify that no unexpected requests were made
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUser', () => {
    it('should return user data', () => {
      const username = 'exampleUser';
      const mockUserData = { login: username, name: 'John Doe' };

      service.getUser(username).subscribe((user) => {
        expect(user).toEqual(mockUserData);
      });

      const req = httpMock.expectOne(
        `https://api.github.com/users/${username}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockUserData);
    });
  });

  describe('getRepos', () => {
    it('should return user repositories', () => {
      const username = 'exampleUser';
      const currentPage = 1;
      const reposPerPage = 10;
      const mockReposData = [{ name: 'repo1' }, { name: 'repo2' }];

      service
        .getRepos(username, currentPage, reposPerPage)
        .subscribe((repos) => {
          expect(repos).toEqual(mockReposData);
        });

      const req = httpMock.expectOne(
        `https://api.github.com/users/${username}/repos?page=${currentPage}&per_page=${reposPerPage}`
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockReposData);
    });
  });
});
