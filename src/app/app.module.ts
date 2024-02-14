import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BackgroundComponent } from './background/background.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UserInfoCardComponent } from './main-content/user-info-card/user-info-card.component';
import { RepoCardComponent } from './main-content/repo-card/repo-card.component';

@NgModule({
  declarations: [AppComponent, BackgroundComponent, MainContentComponent, UserInfoCardComponent, RepoCardComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
