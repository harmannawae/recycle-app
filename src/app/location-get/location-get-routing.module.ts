import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationGetPage } from './location-get.page';

const routes: Routes = [
  {
    path: '',
    component: LocationGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationGetPageRoutingModule {}
