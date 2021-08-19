import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderMemberPage } from './rider-member.page';

const routes: Routes = [
  {
    path: '',
    component: RiderMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderMemberPageRoutingModule {}
