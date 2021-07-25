import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';


import { Camera } from '@ionic-native/camera/ngx'; //ปลักอิน camera จำเป็นต้องติดตั้ง เพิ่ม พิมพว่า $npm install @ionic-native/core@^5.1.0 
import { Geolocation } from '@ionic-native/geolocation/ngx'; //ปลักอิน googlo location 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    Camera
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
