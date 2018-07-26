import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
   
  items = ['Food','Groceries','Cars','Ships','Bus','Truck','Jeep'];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  itemSelected(item) {
      const alert = this.alertCtrl.create({
      title: 'Selection',
      subTitle: 'Your have selected' + ' ' + item,
      buttons: ['OK']
    });
    alert.present();
  }

}
