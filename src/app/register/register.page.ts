import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit  {
  name = "";
  sname = "";
  phone = "";
  username = "";
  password = "";
  constructor(
    private router: Router,
    public session: SessionService
  ) { }

  ngOnInit() {
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "register.php", {
      member_name: this.name,
      member_sname: this.sname,
      member_phone: this.phone,
      username: this.username,
      password: this.password
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/login');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}