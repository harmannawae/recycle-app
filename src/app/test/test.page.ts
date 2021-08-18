import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SessionService } from '../session/session.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  img = "assets/icon/favicon.png";
  constructor(
      private camera: Camera,
      private session: SessionService,
      public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}
  
  async OpenCamera() {
      const actionSheet = await this.actionSheetController.create({
          header: 'Albums',
          cssClass: 'my-custom-class',
          buttons: [{
              text: 'ถ่ายรูป',
              icon: 'camera',
              handler: () => {
                  this.GetImage(1);
              }
          }, {
              text: 'เลือกจากอัลบัม',
              icon: 'images',
              handler: () => {
                  this.GetImage(2);
              }
          }]
      });
      await actionSheet.present();
  }
  GetImage(type) {
      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
      }
      if (type == 1) { // Camera 
          options.sourceType = this.camera.PictureSourceType.CAMERA;
      } else {        //  Album
          options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
      }
      this.camera.getPicture(options).then((imageData) => {
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.img = base64Image;
          this.UploadImage(base64Image);
      }, (err) => {
          alert("Error " + err);
      });
  }
  UploadImage(base64) {
      this.session.ajax(this.session.api + "img.php", {
          base64: base64
      }, true).then((res: any) => {
          alert(res.message);
      }).catch(err => {
          alert("Error Connect to server.");
      });
  }

  OpenLocation() {
    this.session.LinkTo("location");
}
 
}
