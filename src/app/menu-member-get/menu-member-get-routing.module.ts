import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMemberGetPage } from './menu-member-get.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMemberGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMemberGetPageRoutingModule {}
