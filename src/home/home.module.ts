import {BrowserModule, Title} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {MaterialModule} from "../helpers/material.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  exports: [HomeModule],
  providers: [Title]
})
export class HomeModule {
}
