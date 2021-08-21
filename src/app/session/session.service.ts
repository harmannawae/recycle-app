import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController,  NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';     //ต้องติดตั้ง package เพิ่มเติมที่ terminal  พิมพ์ว่า npm install @ionic/storage-angular

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  //public api = "http://localhost/recycle-app/";     // ตัวแปรสำหรับชี้ที่ตั้งของ Api
  public api = "http://192.168.137.1/recycle-app/";     // รันวงแลนเดี่ยวกัน
  //public api = "http://406168039.student.yru.ac.th/recycle-app/";     // ตัวแปรสำหรับชี้ที่ตั้งของ Api สำหรับในมหสลัย
  public apiTimeout: number = 5000;
  constructor(
    private http: HttpClient,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastController: ToastController,
    private storage: Storage,
    private router: Router,
    private nav: NavController,
  ) { }
  public async ajax(url, data, isloading) {   // method สำหรับการเชือมต่อเรียก Api Service
    let loading: any;
    if (isloading == true) {
      loading = await this.loadingCtrl.create({
        message: "กำลังประมวลผล",
      });
      await loading.present();
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http.post(url, JSON.stringify(data), { responseType: 'text' })
          .pipe(
            timeout(this.apiTimeout)
          )
          .subscribe((response: any) => {
            if (isloading == true) { loading.dismiss(); }
            try {
              var rs = JSON.parse(response);
              resolve(rs);
            } catch (e) {
              reject(response);
            }
          }, error => {
            if (isloading == true) { loading.dismiss(); }
            reject("ไม่สามารถติดต่อเครื่องแม่ข่ายได้");
          });
      }, 200);
    });
  }
  public showAlert(message) {     // method สำหรับการแสดง Alert ข้อมูล
    let msg: any = message;
    if (typeof message === 'object') msg = JSON.stringify(message);
    if (typeof message === 'string') msg = message;
    return new Promise(async resolve => {
      const alert = await this.alertCtrl.create({
        header: "แจ้งข้อความ",
        message: msg,
        backdropDismiss: false,
        buttons: [
          {
            text: "ตกลง",
            handler: () => {
              resolve(true);
            }
          },
        ]
      });
      await alert.present();
    });
  }
  public showConfirm(message) {   // method สำหรับการแสดงการยืนยันข้อมูล
    let msg: any = message;
    if (typeof message === 'object') msg = JSON.stringify(message);
    if (typeof message === 'string') msg = message;
    return new Promise(async resolve => {
      let alert = await this.alertCtrl.create({
        header: "คำยืนยัน ?",
        message: msg,
        backdropDismiss: false,
        buttons: [
          {
            text: "ยกเลิก",
            role: 'cancel',
            handler: () => {
              resolve(false);
            }
          },
          {
            text: "ตกลง",
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      await alert.present();
    });
  }
  public async showToast(message, duration = 2000) {  // method สำหรับการแสดง Toast ข้อมูล
    const toast = await this.toastController.create({
      color: 'dark',
      message: message,
      duration: duration,
      mode: 'ios',
      // showCloseButton: true,
      // closeButtonText: "ปิด"
    });
    toast.present();
  }
  public getStorage(key) {        // method สำหรับดึงข้อมูลจาก Storage
    return this.storage.get(key);
  }
  public setStorage(key, val) {   // method สำหรับการ set ข้อมูล Storage
    return this.storage.set(key, val);
  }
  public removeStorage(key) {     // method สำหรับลบข้อมูล Storage
    return this.storage.remove(key);
  }
  public LinkTo(page, type = true) { // type=false ไม่จำ/ true=จำ
      if (type == false) {
          this.router.navigateByUrl(page, { replaceUrl: true }); // ไม่จำประวัติหน้าก่อนหน้า
      } else {
          this.router.navigateByUrl(page);  // จำประวัติหน้าก่อนหน้า
      }
  }
  public LinkToParam(page, queryParams) {
      let navigationExtras: NavigationExtras = {
          queryParams: queryParams
      };
      this.router.navigate([page], navigationExtras);
  }
  public Back() { // ฟังก์ชันสำหรับถอยไปยังหน้าก่อนหน้า
      this.nav.pop();
  }
  public Login(username, password) {
    this.ajax(this.api + "login.php", {
      username: username,
      password: password
    }, true).then(async (res: any) => {
      if (res.status ==true) {
        await this.setStorage("user_id", res.data.user_id);//บันทึกคุกกี้ของ user คน คน เดี่ยวเพื่อแสดง  
        await this.setStorage("username", username);
        await this.setStorage("password", password);
        await this.setStorage("user_type", res.data.user_type);
        if (res.data.user_type == 'admin') {
            this.LinkTo("tabs/tab1", false); //เมื่อไรเดอร์กดจะไปหน้า admin 
        } else if (res.data.user_type == 'member'){
          this.LinkTo("tabs/tab2", false);  //เมื่อไรเดอร์กดจะไปหน้า member 
        }else if (res.data.user_type == 'rider'){
          this.LinkTo("rider-menu", false); //เมื่อไรเดอร์กดจะไปหน้า rider 
        }
      } else {
        this.showAlert(res.message);
      }
    }).catch(err => {
      this.showAlert(err);
    });
  }
  public Logout() {
    this.showConfirm("คุณแน่ใจต้องการออกจากระบบใช่หรือไม่ ?").then(async rs => {
      if (rs) {
        await this.removeStorage("user_id"); //ให้ลบข้อมูลคุกกี้ออกเมื่อเรากดออกจากระบบ
        await this.removeStorage("username"); //ให้ลบข้อมูลคุกกี้ออกเมื่อเรากดออกจากระบบ
        await this.removeStorage("password"); //ให้ลบข้อมูลคุกกี้ออกเมื่อเรากดออกจากระบบ
        await this.removeStorage("user_type"); //ให้ลบข้อมูลคุกกี้ออกเมื่อเรากดออกจากระบบ
        this.LinkTo('/login', false);
      }
    });
  }
  
  
}


