import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterAdminPageRoutingModule } from './register-admin-routing.module';

import { RegisterAdminPage } from './register-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAdminPageRoutingModule
  ],
  declarations: [RegisterAdminPage]
})
export class RegisterAdminPageModule {}
