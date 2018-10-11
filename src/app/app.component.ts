import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCnJ4rxJ38OZGwRKmOrTKi_OMco_YWxyUc',
  authDomain: 'hack-teleton.firebaseapp.com',
  databaseURL: 'https://hack-teleton.firebaseio.com',
  projectId: 'hack-teleton',
  storageBucket: 'hack-teleton.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
