/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  user_type;
  constructor(
    public session: SessionService
  ) { }
  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
  }
}