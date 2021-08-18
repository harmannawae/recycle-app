import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMapPageRoutingModule } from './menu-map-routing.module';

import { MenuMapPage } from './menu-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMapPageRoutingModule
  ],
  declarations: [MenuMapPage]
})
export class MenuMapPageModule {}
