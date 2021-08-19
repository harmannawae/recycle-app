import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderMemberPageRoutingModule } from './rider-member-routing.module';

import { RiderMemberPage } from './rider-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderMemberPageRoutingModule
  ],
  declarations: [RiderMemberPage]
})
export class RiderMemberPageModule {}
