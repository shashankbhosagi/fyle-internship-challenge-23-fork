import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {
  @Input() userExist: boolean = true;
  @Input() emptyUsername: boolean = false;
  @Output() usernameEntered: EventEmitter<string> = new EventEmitter<string>();
  username: string = '';

  sendUsernameToParent() {
    this.usernameEntered.emit(this.username);
  }
}
