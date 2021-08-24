import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  users = [];
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
    this.session.ajax(this.session.api + "member-sell.php", {
      user_id: this.user_id
    }, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  
  
}