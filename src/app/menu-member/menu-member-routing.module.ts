import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMemberPage } from './menu-member.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMemberPageRoutingModule {}
