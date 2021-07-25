import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMysellPage } from './menu-mysell.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMysellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMysellPageRoutingModule {}
