import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPricePage } from './menu-price.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPricePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPricePageRoutingModule {}
