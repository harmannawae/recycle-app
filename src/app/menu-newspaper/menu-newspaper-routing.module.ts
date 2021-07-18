import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuNewspaperPage } from './menu-newspaper.page';

const routes: Routes = [
  {
    path: '',
    component: MenuNewspaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuNewspaperPageRoutingModule {}
