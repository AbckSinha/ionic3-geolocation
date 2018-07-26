import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }
  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
        console.log("latitude" + data.coords.latitude);
        console.log("longitude" +data.coords.longitude);
    });
  }

}
