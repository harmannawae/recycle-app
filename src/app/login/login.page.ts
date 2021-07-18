import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = "";
  password = "";
  constructor(
    private router: Router,
    public session: SessionService
  ) { }

  ngOnInit() {
  }
  login() {
     //alert(this.username);
     //alert(this.password);
    this.session.ajax(this.session.api + "login.php", {
      username: this.username,
      password: this.password
    }, true).then(async (res: any) => {
      if (res.status) {
        await this.session.setStorage("username", this.username);
        await this.session.setStorage("password", this.password);
        this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true }); // เมื่อ login สำเร็จ ให้วิ่งไปยังหน้า home
      } else {
        this.session.showAlert("เข้าสู่ระบบไม่สำเร็จ");
      }
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
