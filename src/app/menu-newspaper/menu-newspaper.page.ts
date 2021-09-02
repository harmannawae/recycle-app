import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-menu-newspaper',
  templateUrl: './menu-newspaper.page.html',
  styleUrls: ['./menu-newspaper.page.scss'],
})
export class MenuNewspaperPage implements OnInit {
  newspapers = [];
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
    this.session.ajax(this.session.api + "menu-newspaper.php", {}, true).then((res: any) => {
      this.newspapers = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async del(id) {
    this.session.showConfirm('คุณแน่ใจต้องการลบข้อมูลนี้ใช่หรือไม่ ?').then(rs => {
      if (rs) {
        this.session.ajax(this.session.api + "newspaper-del.php", {
          n_id: id
        }, true).then((res: any) => {
          this.loadData();
        }).catch(err => {
          this.session.showAlert(err);
        });
      }
    });
  }
}