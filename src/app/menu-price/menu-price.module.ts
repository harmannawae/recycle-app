import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPricePageRoutingModule } from './menu-price-routing.module';

import { MenuPricePage } from './menu-price.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPricePageRoutingModule
  ],
  declarations: [MenuPricePage]
})
export class MenuPricePageModule {}
