import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.page.html',
  styleUrls: ['./product-get.page.scss'],
})
export class ProductGetPage implements OnInit {
  products = [];
  user_type;

  constructor(
    public alertController: AlertController,
    public session: SessionService

  ) { }

  ngOnInit() {

  }
  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "product-get.php", {}, true).then((res: any) => {
      this.products = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async del(id) {
    this.session.showConfirm('คุณแน่ใจต้องการลบข้อมูลนี้ใช่หรือไม่ ?').then(rs => {
      if (rs) {
        this.session.ajax(this.session.api + "product-del.php", {
          p_id: id
        }, true).then((res: any) => {
          this.loadData();
        }).catch(err => {
          this.session.showAlert(err);
        });
      }
    });
  }
}