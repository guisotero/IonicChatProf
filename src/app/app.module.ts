import { ChatService } from './../providers/chat/chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {AngularFireModule, FirebaseAppConfig} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { UserService } from "../providers/user/user.service";
import { AuthService } from '../providers/auth/auth.service';
import { SigninPage } from '../pages/signin/signin';
import { CustomLoggedHeaderComponent } from '../components/custom-logged-header/custom-logged-header';
import { CapitalizePipe } from '../capitalize.pipe/capitalize.pipe';
import { ChatPage } from '../pages/chat/chat';



const firebaseAPPConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBuaKv3uLyBy4GACRKDZrTOvY_vzP0BPX8",
  authDomain: "ionic-chatprof.firebaseapp.com",
  databaseURL: "https://ionic-chatprof.firebaseio.com",
  storageBucket: "ionic-chatprof.appspot.com",
  messagingSenderId: "978583113116"
};



@NgModule({
  declarations: [
    CapitalizePipe,
    ChatPage,
    CustomLoggedHeaderComponent,
    MyApp,
    HomePage,
    LoginPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAPPConfig),
    HttpClientModule,
    AngularFireDatabaseModule,
    HttpModule,
    AngularFireAuthModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ChatPage,
    MyApp,
    HomePage,
    LoginPage,
    SigninPage
  ],
  providers: [
    AuthService,
    StatusBar,
    SplashScreen,
    UserService,
    ChatService,

    {provide: ErrorHandler, useClass: IonicErrorHandler},


  ]
})
export class AppModule {}
