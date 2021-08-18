import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMapPage } from './menu-map.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMapPageRoutingModule {}
