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
  weight = "";
  name = "";
  phone = "";
  address = "";
 
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
      this.weight = res.data.weight;
      this.name = res.data.name;
      this.phone = res.data.phone;
      this.address = res.data.address;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }

}

