import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuTablePage } from './menu-table.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuTablePageRoutingModule {}
