import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderHistoryRiderPage } from './order-history-rider.page';

const routes: Routes = [
  {
    path: '',
    component: OrderHistoryRiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderHistoryRiderPageRoutingModule {}
