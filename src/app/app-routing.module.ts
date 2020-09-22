import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoogleComponent} from "./google/google.component";
import {DialogComponent} from "./dialog/dialog.component";

const routes: Routes = [
  {path: '',
  pathMatch: 'full',
  redirectTo: 'login'},
  { path: 'login', component: GoogleComponent },
  { path: 'dialog', component: DialogComponent },
  {
    path: '**', component: GoogleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
