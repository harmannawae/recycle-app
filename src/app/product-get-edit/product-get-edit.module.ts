import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductGetEditPageRoutingModule } from './product-get-edit-routing.module';

import { ProductGetEditPage } from './product-get-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductGetEditPageRoutingModule
  ],
  declarations: [ProductGetEditPage]
})
export class ProductGetEditPageModule {}
