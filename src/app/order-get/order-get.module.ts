import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderGetPageRoutingModule } from './order-get-routing.module';

import { OrderGetPage } from './order-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderGetPageRoutingModule
  ],
  declarations: [OrderGetPage]
})
export class OrderGetPageModule {}
