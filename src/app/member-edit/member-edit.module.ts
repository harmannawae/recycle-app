import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberEditPageRoutingModule } from './member-edit-routing.module';

import { MemberEditPage } from './member-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberEditPageRoutingModule
  ],
  declarations: [MemberEditPage]
})
export class MemberEditPageModule {}
