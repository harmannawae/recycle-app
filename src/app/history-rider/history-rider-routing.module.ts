import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryRiderPage } from './history-rider.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryRiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRiderPageRoutingModule {}
