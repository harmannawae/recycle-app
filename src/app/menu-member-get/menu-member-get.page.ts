import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-menu-member-get',
  templateUrl: './menu-member-get.page.html',
  styleUrls: ['./menu-member-get.page.scss'],
})
export class MenuMemberGetPage implements OnInit {
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
    this.session.ajax(this.session.api + "member-get.php", {}, true).then((res: any) => {
      this.users = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async del(id) {
        this.session.ajax(this.session.api + "member-get-del.php", {
          id: id
        }, true).then((res: any) => {
          this.loadData();
        }).catch(err => {
          this.session.showAlert(err);
        });
      }
    }