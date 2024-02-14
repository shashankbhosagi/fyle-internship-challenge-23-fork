import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
})
export class RepoCardComponent {
  @Input() repo: any = [];

  limitStringSize(name: string, maxLength: number) {
    if (name === null || name === undefined) {
      return '';
    } else {
      return name.length > maxLength
        ? name.substring(0, maxLength) + '...'
        : name;
    }
  }
}
