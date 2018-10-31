import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../providers/user/user.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm:FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public userService: UserService
    ) {
  let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  this.loginForm = this.formBuilder.group({
       name:['',[Validators.required,Validators.minLength(5)]],
       username: ['',[Validators.required,Validators.minLength(4)]],
       email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
       password: ['',[Validators.required,Validators.minLength(6)]],
  });

     }

     onSubmit(): void {
      this.userService.create(this.loginForm.value)
      .then(() =>{
              console.log ('Usuario Cadastrado!');
          }).catch(error => {
              console.log('Erro ao criar usuário', error);
          });
      }

}
