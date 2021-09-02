import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewspaperEditPage } from './newspaper-edit.page';

const routes: Routes = [
  {
    path: '',
    component: NewspaperEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewspaperEditPageRoutingModule {}
