import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-menu-sell',
  templateUrl: './menu-sell.page.html',
  styleUrls: ['./menu-sell.page.scss'],
})
export class MenuSellPage implements OnInit  {
  type = "";
  weight = "";
  address = "";
  
  constructor(
    private router: Router,
    public session: SessionService
  ) { }

  ngOnInit() {
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "sell.php", {
      s_type: this.type,
      s_weight: this.weight,
      s_address: this.address
      
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/tabs/tab2');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}