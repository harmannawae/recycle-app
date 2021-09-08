import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderGetPage } from './order-get.page';

const routes: Routes = [
  {
    path: '',
    component: OrderGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderGetPageRoutingModule {}
