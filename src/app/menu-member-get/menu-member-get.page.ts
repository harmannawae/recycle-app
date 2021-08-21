import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-menu-member-get',
  templateUrl: './menu-member-get.page.html',
  styleUrls: ['./menu-member-get.page.scss'],
})
export class MenuMemberGetPage implements OnInit {
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
    this.session.ajax(this.session.api + "member-get.php", {}, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}