import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Episode1Component } from './episode1.component';
import { Episode1RoutingModule } from './episode1.routing';

@NgModule({
  imports: [
    CommonModule,
    Episode1RoutingModule
  ],
  declarations: [Episode1Component]
})
export class Episode1Module {}
