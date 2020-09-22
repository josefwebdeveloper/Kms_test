import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {DialogComponent, DialogOverviewExampleDialog} from "./dialog/dialog.component";
import {FormsModule} from "@angular/forms";
import {GoogleComponent} from "./google/google.component";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogOverviewExampleDialog,
    GoogleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
