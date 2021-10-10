/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/quotes */
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
    this.session.ajax(this.session.api + "login.php", {
      username: this.username,
      password: this.password
    }, true).then(async (res: any) => {
      if (res.status) {
        await this.session.setStorage("user_id", res.data.user_id);//บันทึกคุกกี้ของ user คน คน เดี่ยวเพื่อแสดง
        await this.session.setStorage("user_type", res.data.user_type);//บันทึกคุกกี้ของ user คน คน เดี่ยวเพื่อแสดง
        await this.session.setStorage("user_order", res.data.user_order);//บันทึกคุกกี้ของ user คน คน เดี่ยวเพื่อแสดง
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
  goToregister() {
    this.router.navigateByUrl('/register');
  }
}