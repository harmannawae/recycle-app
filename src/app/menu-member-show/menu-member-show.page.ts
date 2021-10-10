/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session/session.service';
@Component({
  selector: 'app-menu-member-show',
  templateUrl: './menu-member-show.page.html',
  styleUrls: ['./menu-member-show.page.scss'],
})
export class MenuMemberShowPage implements OnInit {
  id = "";
  type = "";
  p_type = "";
  weight = "";
  user_name = "";
  user_lastname = "";
  user_phone = "";
  user_address = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "menu-member-show.php", {
      id: this.id
    }, true).then((res: any) => {
      this.id = res.data.id;
      this.type = res.data.type;
      this.p_type = res.data.p_type;
      this.weight = res.data.weight;
      this.user_name = res.data.user_name;
      this.user_lastname = res.data.user_lastname;
      this.user_phone = res.data.user_phone;
      this.user_address = res.data.user_address;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }

}

