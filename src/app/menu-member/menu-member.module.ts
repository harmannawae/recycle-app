import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMemberPageRoutingModule } from './menu-member-routing.module';

import { MenuMemberPage } from './menu-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMemberPageRoutingModule
  ],
  declarations: [MenuMemberPage]
})
export class MenuMemberPageModule {}
