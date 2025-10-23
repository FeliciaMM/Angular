import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Welcome } from './pages/welcome/welcome';
import { Conferences } from './pages/conferences/conferences';
import { MyConferences } from './pages/my-conferences/my-conferences';

@NgModule({
  declarations: [
    App,
    Welcome,
    Conferences,
    MyConferences
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
