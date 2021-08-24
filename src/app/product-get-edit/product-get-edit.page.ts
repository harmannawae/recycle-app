import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-product-get-edit',
  templateUrl: './product-get-edit.page.html',
  styleUrls: ['./product-get-edit.page.scss'],
})
export class ProductGetEditPage implements OnInit {
  p_id = "";
  p_name = "";
  p_price = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    private router: Router,
  ) {
    this.p_id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "product-get-show.php", {
      p_id: this.p_id
    }, true).then((res: any) => {
      this.p_id = res.data.p_id;
      this.p_name = res.data.p_name;
      this.p_price = res.data.p_price;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  edit() {
    this.session.ajax(this.session.api + "product-edit.php", {
      p_id: this.p_id,
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
