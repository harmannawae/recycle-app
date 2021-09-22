import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-total-amount-admin',
  templateUrl: './total-amount-admin.page.html',
  styleUrls: ['./total-amount-admin.page.scss'],
})
export class TotalAmountAdminPage implements OnInit {
  sum_totals = [];
  constructor(
    public alertController: AlertController,
    public session: SessionService
  ) { }

  ngOnInit() {
    
    
  }
  //เรียกข้อมูล แสดงคนคนเดี่ยวเท่านั้น
  async ionViewDidEnter() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "total-amount-admin.php", {}, true).then((res: any) => {
      this.sum_totals = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}

