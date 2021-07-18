import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit  {
  member_name = "";
  member_sname = "";
  member_phone ="";
  username = "";
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
      this.member_name = res.data.member_name;
      this.member_sname = res.data.member_sname;
      this.member_phone = res.data.member_phone;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async logout() {
    this.session.showConfirm("คุณแน่ใจต้องการออกจากระบบใช่หรือไม่ ?").then(async rs => {
      if (rs) {
        await this.session.removeStorage("username");
        await this.session.removeStorage("password");
        this.router.navigateByUrl('/login', { replaceUrl: true }); // ให้วิ่งไปยังหน้า login ใหม่
      }
    });
  }
}
