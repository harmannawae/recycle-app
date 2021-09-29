import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationGetPageRoutingModule } from './location-get-routing.module';

import { LocationGetPage } from './location-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationGetPageRoutingModule
  ],
  declarations: [LocationGetPage]
})
export class LocationGetPageModule {}
