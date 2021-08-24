import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductGetPageRoutingModule } from './product-get-routing.module';

import { ProductGetPage } from './product-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductGetPageRoutingModule
  ],
  declarations: [ProductGetPage]
})
export class ProductGetPageModule {}
