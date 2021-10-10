/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  user_type;

  constructor(
    public alertController: AlertController,
    public session: SessionService

  ) { }

  ngOnInit() {

  }
  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
  }
}