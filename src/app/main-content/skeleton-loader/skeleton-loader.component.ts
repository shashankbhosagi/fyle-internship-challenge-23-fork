import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
})
export class SkeletonLoaderComponent {
  @Input() reposPerPage: number = 10;

  repeatArray: any[] = Array.from({ length: this.reposPerPage });
}
