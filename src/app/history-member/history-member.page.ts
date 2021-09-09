import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-history-member',
  templateUrl: './history-member.page.html',
  styleUrls: ['./history-member.page.scss'],
})
export class HistoryMemberPage implements OnInit {
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
    this.session.ajax(this.session.api + "order-get.php", {}, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
