import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private spinnerDialog: SpinnerDialog,
    public app: App) {

  }
  ngOnInit() {
    this.spinnerDialog.show();
  }

  showAlert() {
    this.spinnerDialog.hide();
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  logoutme() {
     // Remove API token 
        const root = this.app.getRootNav();
        root.popToRoot();
  }
}
