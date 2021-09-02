import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryRiderPageRoutingModule } from './history-rider-routing.module';

import { HistoryRiderPage } from './history-rider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryRiderPageRoutingModule
  ],
  declarations: [HistoryRiderPage]
})
export class HistoryRiderPageModule {}
