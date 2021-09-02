import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewspaperEditPageRoutingModule } from './newspaper-edit-routing.module';

import { NewspaperEditPage } from './newspaper-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewspaperEditPageRoutingModule
  ],
  declarations: [NewspaperEditPage]
})
export class NewspaperEditPageModule {}
