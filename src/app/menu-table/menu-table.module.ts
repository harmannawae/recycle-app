import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuTablePageRoutingModule } from './menu-table-routing.module';

import { MenuTablePage } from './menu-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuTablePageRoutingModule
  ],
  declarations: [MenuTablePage]
})
export class MenuTablePageModule {}
