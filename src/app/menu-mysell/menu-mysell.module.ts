import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMysellPageRoutingModule } from './menu-mysell-routing.module';

import { MenuMysellPage } from './menu-mysell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMysellPageRoutingModule
  ],
  declarations: [MenuMysellPage]
})
export class MenuMysellPageModule {}
