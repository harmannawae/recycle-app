import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderMenuPageRoutingModule } from './rider-menu-routing.module';

import { RiderMenuPage } from './rider-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderMenuPageRoutingModule
  ],
  declarations: [RiderMenuPage]
})
export class RiderMenuPageModule {}
