import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuNewspaperAddPageRoutingModule } from './menu-newspaper-add-routing.module';

import { MenuNewspaperAddPage } from './menu-newspaper-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuNewspaperAddPageRoutingModule
  ],
  declarations: [MenuNewspaperAddPage]
})
export class MenuNewspaperAddPageModule {}
