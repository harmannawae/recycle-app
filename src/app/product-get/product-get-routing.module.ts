import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductGetPage } from './product-get.page';

const routes: Routes = [
  {
    path: '',
    component: ProductGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductGetPageRoutingModule {}
