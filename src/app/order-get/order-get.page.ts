/* eslint-disable eol-last */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-order-get',
  templateUrl: './order-get.page.html',
  styleUrls: ['./order-get.page.scss'],
})
export class OrderGetPage implements OnInit {
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
  async del(id) {
        this.session.ajax(this.session.api + "order-get-del.php", {
          id: id
        }, true).then((res: any) => {
          this.loadData();
        }).catch(err => {
          this.session.showAlert(err);
        });
      }
    }