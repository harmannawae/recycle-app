import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuMemberShowPageRoutingModule } from './menu-member-show-routing.module';

import { MenuMemberShowPage } from './menu-member-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuMemberShowPageRoutingModule
  ],
  declarations: [MenuMemberShowPage]
})
export class MenuMemberShowPageModule {}
