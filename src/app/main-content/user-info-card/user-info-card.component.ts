import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
})
export class UserInfoCardComponent {
  @Input() userData: any;
}
