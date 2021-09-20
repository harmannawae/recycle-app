import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user_type;
  orders = [];
  products = [];
  newspapers = [];
  constructor(
    public session: SessionService
  ) { }
  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "report-count-order.php", {}, true).then((res: any) => {
    this.orders = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });

    this.session.ajax(this.session.api + "product-report-tab1.php", {}, true).then((res: any) => {
    this.products = res.datas;
      }).catch(err => {
        this.session.showAlert(err);
      });

      this.session.ajax(this.session.api + "menu-newspaper.php", {}, true).then((res: any) => {
        this.newspapers = res.datas;
      }).catch(err => {
        this.session.showAlert(err);
      });
  }
}



