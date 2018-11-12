import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { UserService } from '../../providers/user/user.service';





@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  messages: string[] = [];

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService
        ) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage(newMessage: string): void {
this.messages.push(newMessage);

  }

}
