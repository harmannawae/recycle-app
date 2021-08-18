import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuMemberShowPage } from './menu-member-show.page';

const routes: Routes = [
  {
    path: '',
    component: MenuMemberShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuMemberShowPageRoutingModule {}
