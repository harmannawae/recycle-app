import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user_type;

  constructor(
    public session: SessionService,
    private router: Router,
  ) {

  }
  //คำสั่ง logout ให้ลบข้อมูลคุกกี้
  async logout() {
    this.session.Logout();
  }
  //โชว์บางเมนู 
  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
  }
}
