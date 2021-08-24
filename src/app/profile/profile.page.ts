import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit  {
  user_name = "";
  user_lastname = "";
  user_phone ="";
  username = "";
  user_type;
  constructor(
    public session: SessionService,
    private router: Router,
  ) { }
  async ngOnInit() {
    this.username = await this.session.getStorage("username");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "profile.php", {
      username: this.username
    }, true).then((res: any) => {
      this.user_name = res.data.user_name;
      this.user_lastname = res.data.user_lastname;
      this.user_phone = res.data.user_phone;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async logout() {
    this.session.Logout();
  }
  async ionViewDidEnter() {
    this.user_type = await this.session.getStorage("user_type");
  }
}
