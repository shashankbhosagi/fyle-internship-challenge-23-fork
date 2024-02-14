import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  appTitle: string = 'Fyle Internship Challenge';

  ngOnInit(): void {}
}
