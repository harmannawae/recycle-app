import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuNewspaperAddPage } from './menu-newspaper-add.page';

const routes: Routes = [
  {
    path: '',
    component: MenuNewspaperAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuNewspaperAddPageRoutingModule {}
