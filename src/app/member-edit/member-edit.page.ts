import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.page.html',
  styleUrls: ['./member-edit.page.scss'],
})
export class MemberEditPage implements OnInit {
  user_id = "";
  user_name = "";
  user_lastname = "";
  user_phone = "";
  user_address = "";
  username = "";
  password = "";
  user_type = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    private router: Router,
  ) {
    this.user_id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "member-get-show.php", {
      user_id: this.user_id
    }, true).then((res: any) => {
      this.user_id = res.data.user_id;
      this.user_name = res.data.user_name;
      this.user_lastname = res.data.user_lastname;
      this.user_phone = res.data.user_phone;
      this.user_address = res.data.user_address;
      this.username = res.data.username;
      this.password = res.data.password;
      this.user_type = res.data.user_type;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  edit() {
    this.session.ajax(this.session.api + "member-edit.php", {
      user_id: this.user_id,
      user_name: this.user_name,
      user_lastname: this.user_lastname,
      user_phone: this.user_phone,
      user_address: this.user_address,
      username: this.username,
      password: this.password,
      user_type: this.user_type
      
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/manage-member');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
