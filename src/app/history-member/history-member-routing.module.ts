import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryMemberPage } from './history-member.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryMemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryMemberPageRoutingModule {}
