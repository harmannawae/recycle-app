import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSellPageRoutingModule } from './menu-sell-routing.module';

import { MenuSellPage } from './menu-sell.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSellPageRoutingModule
  ],
  declarations: [MenuSellPage]
})
export class MenuSellPageModule {}
