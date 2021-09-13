import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryAllPageRoutingModule } from './history-all-routing.module';

import { HistoryAllPage } from './history-all.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryAllPageRoutingModule
  ],
  declarations: [HistoryAllPage]
})
export class HistoryAllPageModule {}
