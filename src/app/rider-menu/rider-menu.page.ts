import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-rider-menu',
  templateUrl: './rider-menu.page.html',
  styleUrls: ['./rider-menu.page.scss'],
})
export class RiderMenuPage implements OnInit {

  constructor(
    public session: SessionService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
   //คำสั่ง logout ให้ลบข้อมูลคุกกี้
   async logout() {
    this.session.showConfirm("คุณแน่ใจต้องการออกจากระบบใช่หรือไม่ ?").then(async rs => {
      if (rs) {
        await this.session.removeStorage("user_id"); //ให้ลบข้อมูลคุกกี้ออกเมื่อเรากดออกจากระบบ
        await this.session.removeStorage("username"); //ให้ลบข้อมูลคุกกี้ออกเมื่อเรากดออกจากระบบ
        await this.session.removeStorage("password"); //ให้ลบข้อมูลคุกกี้ออกเมื่อเรากดออกจากระบบ
        this.router.navigateByUrl('/login', { replaceUrl: true }); // ให้วิ่งไปยังหน้า login ใหม่
      }
    });
  }

}
