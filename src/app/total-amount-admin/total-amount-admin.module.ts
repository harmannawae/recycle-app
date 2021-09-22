import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalAmountAdminPageRoutingModule } from './total-amount-admin-routing.module';

import { TotalAmountAdminPage } from './total-amount-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalAmountAdminPageRoutingModule
  ],
  declarations: [TotalAmountAdminPage]
})
export class TotalAmountAdminPageModule {}
