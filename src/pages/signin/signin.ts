import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth/auth.service';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  signinForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public authService: AuthService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
    ) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      this.signinForm = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });


  }

  onSubmit(): void {

    let loading: Loading = this.showLoading();

    this.authService.signinWithEmail(this.signinForm.value)
      .then((isLogged: boolean) => {

        if (isLogged) {
          this.navCtrl.setRoot(HomePage);
          loading.dismiss();
        }

      }).catch((error: any) => {
        console.log(error);
        loading.dismiss();
        this.showAlert(error);
      });

  }

  onSignup(): void {
    this.navCtrl.push(LoginPage);
  }

  private showLoading(): Loading {
    let loading: Loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    return loading;
  }

  private showAlert(message: string): void {
    this.alertCtrl.create({
      message: message,
      buttons: ['Ok']
    }).present();
  }

}
