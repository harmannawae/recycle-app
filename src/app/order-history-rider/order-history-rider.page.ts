import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-order-history-rider',
  templateUrl: './order-history-rider.page.html',
  styleUrls: ['./order-history-rider.page.scss'],
})
export class OrderHistoryRiderPage implements OnInit {
  user_id = "";
  users = [];

  constructor(
    private router: Router,
    public alertController: AlertController,
    public session: SessionService

  ) { }

  ngOnInit() {

  }
  ionViewDidEnter() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "order-history-rider.php", {}, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}