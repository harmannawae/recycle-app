/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    user_type;
    constructor(
      public session: SessionService
    ) { }
    async ionViewDidEnter() {
      this.user_type = await this.session.getStorage("user_type");
    }
  }