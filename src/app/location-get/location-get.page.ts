/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { SessionService } from '../session/session.service';

declare var google;

@Component({
  selector: 'app-location-get',
  templateUrl: './location-get.page.html',
  styleUrls: ['./location-get.page.scss'],
})
export class LocationGetPage implements OnInit {
  lat;
  lng;
  @ViewChild('mapElement') mapElement;

  constructor(
    private geolocation: Geolocation,
    private session: SessionService
  ) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        setTimeout(() => {
            var map = new google.maps.Map(
                this.mapElement.nativeElement, {
                center: { lat: this.lat, lng: this.lng },
                zoom: 15
            });
            new google.maps.Marker({
                position: { lat: this.lat, lng: this.lng },
                map,
                title: "Hello World!",
            });
        }, 0);
        this.SaveLocation(this.lat, this.lng);
    }).catch((error) => {
        alert('Error getting location ' + error);
    });
}
SaveLocation(lat, lng) {
    this.session.ajax(this.session.api + "save-location.php", {
        lat: lat,
        lng: lng
    }, true).then((res: any) => {
        //alert(res.message);
    }).catch(err => {
        alert("Error Connect to server.");
    });
}
}
