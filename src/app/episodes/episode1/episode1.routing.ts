import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Episode1Component } from './episode1.component';

export const routes: Routes = [
  {
    path: '',
    component: Episode1Component
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class Episode1RoutingModule {}
