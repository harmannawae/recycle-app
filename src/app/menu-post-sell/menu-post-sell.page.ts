import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-menu-post-sell',
  templateUrl: './menu-post-sell.page.html',
  styleUrls: ['./menu-post-sell.page.scss'],
})
export class MenuPostSellPage implements OnInit {
  type = "";
  weight = "";
  user_id = "";
  constructor(
    private router: Router,
    public session: SessionService
  ) { }
  async ngOnInit() {
    this.user_id = await this.session.getStorage("user_id");
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "menu-post-sell.php", {
      type: this.type,
      weight: this.weight,
      user_id: this.user_id
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        if( res.status==true ) this.router.navigateByUrl('/tabs/tab2');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}