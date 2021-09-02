import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-menu-newspaper-add',
  templateUrl: './menu-newspaper-add.page.html',
  styleUrls: ['./menu-newspaper-add.page.scss'],
})
export class MenuNewspaperAddPage implements OnInit {
  n_title = "";
  n_name = "";
  n_content = "";
 
  constructor(
    private router: Router,
    public session: SessionService
  ) { }
  async ngOnInit() {
  }
  
  async save() {
    // เอาข้อมูลบันทึกลงฐานข้อมูล
    this.session.ajax(this.session.api + "newspaper-add.php", {
      n_title: this.n_title,
      n_name: this.n_name,
      n_content: this.n_content
    }, true).then((res: any) => {
      this.session.showAlert(res.msg).then(rs => {
        if( res.status==true ) this.router.navigateByUrl('/menu-newspaper');
      });
    }).catch(err => {
      this.session.showAlert(err);
    });
  }
} 