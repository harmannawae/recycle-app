import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-order-history-rider',
  templateUrl: './order-history-rider.page.html',
  styleUrls: ['./order-history-rider.page.scss'],
})
export class OrderHistoryRiderPage implements OnInit  {
  users = [];
  user_order = "";
  constructor(
    public alertController: AlertController,
    public session: SessionService
  ) { }

  ngOnInit() {
    
    
  }
  //เรียกข้อมูล แสดงคนคนเดี่ยวเท่านั้น
  async ionViewDidEnter() {
    this.user_order = await this.session.getStorage("user_order");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "order-history-rider.php", {
      user_order: this.user_order
    }, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  
  
}