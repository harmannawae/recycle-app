import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { SessionService } from './session/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private storage: Storage,
    public session: SessionService
  ) {
    this.init();
  }
  async init() {
    await this.storage.create();
    let username = await this.session.getStorage("username");
    let password = await this.session.getStorage("password");
    if (!username || !password) { // เช็คว่าเคย login หรือยัง
      this.router.navigateByUrl('/login', { replaceUrl: true }); // หากยังก็ให้วิ่งไปยังหน้า login
    } else {
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true }); // หากเคยแล้วให้วิ่งไปยังหน้า home
    }
  }
}
