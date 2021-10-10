/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit {
  p_name = "";
  p_price = "";
  constructor(
    private router: Router,
    public session: SessionService
  ) { }

  ngOnInit() {
  }
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "product-add.php", {
      p_name: this.p_name,
      p_price: this.p_price
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/product-get');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}