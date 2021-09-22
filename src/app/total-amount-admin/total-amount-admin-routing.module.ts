import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalAmountAdminPage } from './total-amount-admin.page';

const routes: Routes = [
  {
    path: '',
    component: TotalAmountAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalAmountAdminPageRoutingModule {}
