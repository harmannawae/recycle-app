import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryAllPage } from './history-all.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryAllPageRoutingModule {}
