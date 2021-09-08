import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryRiderPageRoutingModule } from './order-history-rider-routing.module';

import { OrderHistoryRiderPage } from './order-history-rider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryRiderPageRoutingModule
  ],
  declarations: [OrderHistoryRiderPage]
})
export class OrderHistoryRiderPageModule {}
