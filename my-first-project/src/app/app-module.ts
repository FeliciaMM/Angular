import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Welcome } from './pages/welcome/welcome';
import { Conferences } from './pages/conferences/conferences';
import { MyConferences } from './pages/my-conferences/my-conferences';
import { Sidebar } from './layout/sidebar/sidebar';
import { ContentBar } from './layout/content-bar/content-bar';

@NgModule({
  declarations: [
    App,
    Welcome,
    Conferences,
    MyConferences,
    Sidebar,
    ContentBar
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
