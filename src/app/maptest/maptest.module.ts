import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaptestPageRoutingModule } from './maptest-routing.module';

import { MaptestPage } from './maptest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaptestPageRoutingModule
  ],
  declarations: [MaptestPage]
})
export class MaptestPageModule {}
