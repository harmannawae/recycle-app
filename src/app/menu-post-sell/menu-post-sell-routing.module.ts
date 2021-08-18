import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPostSellPage } from './menu-post-sell.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPostSellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPostSellPageRoutingModule {}
