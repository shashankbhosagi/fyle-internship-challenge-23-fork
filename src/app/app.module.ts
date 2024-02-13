import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BackgroundComponent } from './background/background.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [AppComponent, BackgroundComponent, MainContentComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
