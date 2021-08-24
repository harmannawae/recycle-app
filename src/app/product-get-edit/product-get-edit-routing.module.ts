import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductGetEditPage } from './product-get-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProductGetEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductGetEditPageRoutingModule {}
