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
  p_id = "";
  user_id = "";
  types = [];
  constructor(
    private router: Router,
    public session: SessionService
  ) { }
  async ngOnInit() {
    this.loadData();
    this.user_id = await this.session.getStorage("user_id");
  }
  loadData() {
    this.session.ajax(this.session.api + "product-get.php", {}, true).then((res: any) => {
      this.types = res.datas;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "menu-post-sell.php", {
      type: this.type,
      p_id: this.p_id,
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