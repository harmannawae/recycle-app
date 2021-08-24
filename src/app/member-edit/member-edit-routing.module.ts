import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberEditPage } from './member-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MemberEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberEditPageRoutingModule {}
