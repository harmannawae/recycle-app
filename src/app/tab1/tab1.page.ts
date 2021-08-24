import { Component } from '@angular/core';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  user_type;
  constructor(
    public session: SessionService
  ) { }
  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
  }
}


