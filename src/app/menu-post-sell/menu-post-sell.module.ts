import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPostSellPageRoutingModule } from './menu-post-sell-routing.module';

import { MenuPostSellPage } from './menu-post-sell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPostSellPageRoutingModule
  ],
  declarations: [MenuPostSellPage]
})
export class MenuPostSellPageModule {}
