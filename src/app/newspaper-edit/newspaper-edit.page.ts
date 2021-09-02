import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-newspaper-edit',
  templateUrl: './newspaper-edit.page.html',
  styleUrls: ['./newspaper-edit.page.scss'],
})
export class NewspaperEditPage implements OnInit {
  n_id = "";
  n_title = "";
  n_name = "";
  n_content = "";
  constructor(
    private route: ActivatedRoute,
    public session: SessionService,
    private router: Router,
  ) {
    this.n_id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.session.ajax(this.session.api + "newspaper-show.php", {
      n_id: this.n_id
    }, true).then((res: any) => {
      this.n_id = res.data.n_id;
      this.n_title = res.data.n_title;
      this.n_name = res.data.n_name;
      this.n_content = res.data.pn_content;
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
  edit() {
    this.session.ajax(this.session.api + "newspaper-edit.php", {
      n_id: this.n_id,
      n_title: this.n_title,
      n_name: this.n_name,
      n_content: this.n_content
      
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        this.router.navigateByUrl('/menu-newspaper');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
}
