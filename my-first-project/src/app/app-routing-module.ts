import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Conferences } from './pages/conferences/conferences';
import { MyConferences } from './pages/my-conferences/my-conferences';

const routes: Routes = [
  { path: 'pages/welcome', component: Welcome },
  { path: 'pages/conferences', component: Conferences },
  { path: 'pages/my-conferences', component: MyConferences },
  { path: '**', redirectTo: 'welcome' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
