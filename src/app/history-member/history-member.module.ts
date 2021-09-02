import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryMemberPageRoutingModule } from './history-member-routing.module';

import { HistoryMemberPage } from './history-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryMemberPageRoutingModule
  ],
  declarations: [HistoryMemberPage]
})
export class HistoryMemberPageModule {}
