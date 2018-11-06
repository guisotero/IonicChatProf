import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../providers/user/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  users: Observable<User[]>;

  constructor(
    public navCtrl: NavController,
    public userService: UserService,


    ) {
  }

  ionViewDidLoad(){
    this.users = this.userService.users;
}

onChatCreate(user:User): void{
  console.log('User:',user);
}

  Login(): void{
      this.navCtrl.push(LoginPage)
    }


}

