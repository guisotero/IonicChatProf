import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm:FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder
    ) {
  
     
  let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  
  this.loginForm = this.formBuilder.group({
       name:['',[Validators.required,Validators.minLength(5)]],
       username: ['',[Validators.required,Validators.minLength(4)]],
       email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
       password: ['',[Validators.required,Validators.minLength(6)]],

  });       

     }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

onSubmit(): void {
  console.log ('Form submit');
}


}
