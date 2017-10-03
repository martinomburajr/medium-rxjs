import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode1Component } from './episode1.component';
import { Episode1RoutingModule } from './episode1.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Episode1RoutingModule
  ],
  declarations: [Episode1Component]
})
export class Episode1Module {}
