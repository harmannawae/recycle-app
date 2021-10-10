/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-history-all',
  templateUrl: './history-all.page.html',
  styleUrls: ['./history-all.page.scss'],
})
export class HistoryAllPage implements OnInit  {
  users = [];
  sum_totals = [];
  user_id = "";
  constructor(
    public alertController: AlertController,
    public session: SessionService
  ) { }

  ngOnInit() {

  }
  //เรียกข้อมูล แสดงคนคนเดี่ยวเท่านั้น
  async ionViewDidEnter() {
    this.user_id = await this.session.getStorage("user_id");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "history-all.php", {
      user_id: this.user_id
    }, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
    this.session.ajax(this.session.api + "total-amount-admin.php", {}, true).then((res: any) => {
      this.sum_totals = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}

