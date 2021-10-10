/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-manage-member',
  templateUrl: './manage-member.page.html',
  styleUrls: ['./manage-member.page.scss'],
})
export class ManageMemberPage implements OnInit {
  users = [];

  constructor(
    public alertController: AlertController,
    public session: SessionService

  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "member.php", {}, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async del(id) {
    this.session.showConfirm('คุณแน่ใจต้องการลบข้อมูลนี้ใช่หรือไม่ ?').then(rs => {
      if (rs) {
        this.session.ajax(this.session.api + "member-del.php", {
          user_id: id
        }, true).then((res: any) => {
          this.loadData();
        }).catch(err => {
          this.session.showAlert(err);
        });
      }
    });
  }
}