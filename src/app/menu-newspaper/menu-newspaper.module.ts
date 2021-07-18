import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuNewspaperPageRoutingModule } from './menu-newspaper-routing.module';

import { MenuNewspaperPage } from './menu-newspaper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuNewspaperPageRoutingModule
  ],
  declarations: [MenuNewspaperPage]
})
export class MenuNewspaperPageModule {}
