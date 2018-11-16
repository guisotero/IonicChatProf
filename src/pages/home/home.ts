import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../providers/user/user.service';
import { User } from '../../models/user.model';
import { ChatPage } from '../chat/chat';
import { ChatService } from '../../providers/chat/chat.service';
import * as firebase from 'firebase/app';


import { Chat } from '../../models/chat.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  chats: Observable<Chat[]>;
  users: Observable<User[]>;
  view: string = 'chats';

  constructor(
    public navCtrl: NavController,
    public chatService: ChatService,
    public userService: UserService


    ) {
  }

  ionViewDidLoad(){
    this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
    .map((chats: Chat[]) => chats.reverse());
    this.users = this.userService.users;

}

onChatCreate(recipientUser:User): void{
  this.userService
  .mapObjectKey<User>(this.userService.currentUser)
  .first()
  .subscribe((currentUser: User) => {

    this.chatService
      .mapObjectKey<Chat>(this.chatService.getDeepChat(currentUser.$key, recipientUser.$key))
      .first()
      .subscribe((chat: Chat) => {

        if (!chat.hasOwnProperty('$value')) {

          let timestamp: Object = firebase.database.ServerValue.TIMESTAMP;

          let chat1 = new Chat('', timestamp, recipientUser.name, '');
          this.chatService.create(chat1, currentUser.$key, recipientUser.$key);

          let chat2 = new Chat('', timestamp, currentUser.name, '');
          this.chatService.create(chat2, recipientUser.$key, currentUser.$key);

        }
      });
      });

      this.navCtrl.push(ChatPage, {
        recipientUser: recipientUser
      });

}

  Login(): void{
      this.navCtrl.push(HomePage)
    }


}

