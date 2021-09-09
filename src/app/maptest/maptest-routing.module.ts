import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaptestPage } from './maptest.page';

const routes: Routes = [
  {
    path: '',
    component: MaptestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaptestPageRoutingModule {}
