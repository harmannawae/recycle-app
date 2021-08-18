import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-menu-mysell',
  templateUrl: './menu-mysell.page.html',
  styleUrls: ['./menu-mysell.page.scss'],
})
export class MenuMysellPage implements OnInit {
  member_name = "";
  member_sname = "";
  member_phone ="";
  username = "";
  constructor(
    public session: SessionService,
    private router: Router,
  ) { }
  async ngOnInit() {
    this.username = await this.session.getStorage("username");
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "menu-mysell.php", {
      username: this.username
    }, true).then((res: any) => {
      this.member_name = res.data.member_name;
      this.member_sname = res.data.member_sname;
      this.member_phone = res.data.member_phone;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  
}