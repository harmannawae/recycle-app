import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderMenuPage } from './rider-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RiderMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderMenuPageRoutingModule {}
