import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.page.html',
  styleUrls: ['./order-confirm.page.scss'],
})
export class OrderConfirmPage implements OnInit {
  id = "";
  type = "";
  weight = "";
  total ="";

  p_name = "";
  p_price = "";
  user_name = "";
  user_lastname = "";
  user_phone = "";
  user_address = "";

  user_id = "";
  user_order = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    private router: Router,
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  async ngOnInit() {
    this.loadData();
    this.user_order = await this.session.getStorage("user_order");
  }
  loadData() {
    this.session.ajax(this.session.api + "order-confirm.php", {
      id: this.id
    }, true).then((res: any) => {
      this.id = res.data.id;
      this.type = res.data.type;
      this.weight = res.data.weight;
      this.p_name = res.data.p_name;
      this.p_price = res.data.p_price;
      this.total= res.data.total;
      this.user_name= res.data.user_name;
      this.user_lastname= res.data.user_lastname;
      this.user_phone= res.data.user_phone;
      this.user_address= res.data.user_address;
      this.user_id = res.data.user_id;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  save() {
    this.session.ajax(this.session.api + "order-confirm-save.php", {
      id: this.id,
      user_name: this.user_name,
      type: this.type,
      weight: this.weight,
      user_id: this.user_id,
      user_order: this.user_order
      
    }, true).then((res: any) => {
      {
        this.router.navigateByUrl('/location');
      };
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  async del(id) {
    this.session.ajax(this.session.api + "order-get-del.php", {
      id: id
    }, true).then((res: any) => {
      this.loadData();
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
