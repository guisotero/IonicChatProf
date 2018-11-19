import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';
import { UserService } from '../../providers/user/user.service';
import { User } from '../../models/user.model';
import { AngularFireList } from 'angularfire2/database';
import { Message } from '../../models/message.model';
import { MessageService } from '../../providers/message/message.service';





@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  messages: AngularFireList<Message>;
  pageTitle: string;
  sender: User;
  recipient: User;

  constructor(
    public authService: AuthService,
    public messageService: MessageService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserService

        ) {
  }




  ionViewDidLoad() {
    this.recipient = this.navParams.get('recipientUser');
    this.pageTitle = this.recipient.name;
    this.userService
      .mapObjectKey<User>(this.userService.currentUser)
      .first()
      .subscribe((currentUser: User) => {
        this.sender = currentUser;

        this.messages = this.messageService
        .getMessages(this.sender.$key,this.recipient.$key);

        this.messages
        .valueChanges()
        .first()
        .subscribe((messages: Message[]) => {

          if (messages.length === 0) {

            this.messages = this.messageService
             .getMessages(this.recipient.$key, this.sender.$key);

          }
           });
          });
    
    }

  sendMessage(newMessage: string): void {
     this.messages.push(newMessage);

  }

}
