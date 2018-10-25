import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';


import { UserService } from "../providers/user/user.service";

const firebaseAPPConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBuaKv3uLyBy4GACRKDZrTOvY_vzP0BPX8",
  authDomain: "ionic-chatprof.firebaseapp.com",
  databaseURL: "https://ionic-chatprof.firebaseio.com",
    storageBucket: "ionic-chatprof.appspot.com",
  messagingSenderId: "978583113116"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAPPConfig)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}
