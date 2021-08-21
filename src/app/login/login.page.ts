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
    // this.session.ajax(this.session.api + "login.php", {
    //   username: this.username,
    //   password: this.password
    // }, true).then(async (res: any) => {
    //   if (res.status ==true) {
    //     await this.session.setStorage("user_id", res.data.user_id);//บันทึกคุกกี้ของ user คน คน เดี่ยวเพื่อแสดง  
    //     await this.session.setStorage("username", this.username);
    //     await this.session.setStorage("password", this.password);
    //     await this.session.setStorage("user_type", res.data.user_type);
    //     {
    //       if (res.data.user_type == 'admin') {
    //           this.session.LinkTo("tabs/tab1"); //เมื่อไรเดอร์กดจะไปหน้า admin 
    //       } else if (res.data.user_type == 'member'){
    //         this.session.LinkTo("tabs/tab2");  //เมื่อไรเดอร์กดจะไปหน้า member 
    //       }else if (res.data.user_type == 'rider'){
    //         this.session.LinkTo("rider-menu"); //เมื่อไรเดอร์กดจะไปหน้า rider 
    //       } 
    //   } 

    //     //this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true }); // เมื่อ login สำเร็จ ให้วิ่งไปยังหน้า home
    //   } else {
    //     //this.session.showAlert("เข้าสู่ระบบไม่สำเร็จ");
    //     this.session.showAlert(res.message);
    //   }
    // }).catch(err => {
    //   this.session.showAlert(err);
    // });
    this.session.Login(this.username, this.password);
  }
}
