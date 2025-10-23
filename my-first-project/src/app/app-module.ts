import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Sidebar } from './layout/sidebar/sidebar';
import { ContentBar } from './layout/content-bar/content-bar';
import { Welcome } from './pages/welcome/welcome';
import { Conferences } from './pages/conferences/conferences';
import { MyConferences } from './pages/my-conferences/my-conferences';

@NgModule({
  declarations: [
    App,
    Sidebar,
    ContentBar,
    Welcome,
    Conferences,
    MyConferences
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
