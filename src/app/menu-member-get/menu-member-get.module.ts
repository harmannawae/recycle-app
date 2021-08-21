import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMemberGetPageRoutingModule } from './menu-member-get-routing.module';

import { MenuMemberGetPage } from './menu-member-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMemberGetPageRoutingModule
  ],
  declarations: [MenuMemberGetPage]
})
export class MenuMemberGetPageModule {}
