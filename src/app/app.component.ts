import { Component } from '@angular/core';
//import { provideCloud, CloudSettings } from '@ionic/cloud-angular';
//import { ionicBootstrap, Platform } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';

// const cloudSettings: CloudSettings = {
//   'core': {
//     'app_id': 'YOUR_APP_ID'
//   }
// };

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = WelcomePage; // replaced  TabsPage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}