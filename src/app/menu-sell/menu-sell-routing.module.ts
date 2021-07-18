import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSellPage } from './menu-sell.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSellPageRoutingModule {}
