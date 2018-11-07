import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import  'rxjs/operators/map';

import * as firebase from 'firebase/app';

import { FirebaseApp } from "angularfire2";

import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";



import { User } from "../../models/user.model";
import { BaseService } from '../base.service';




@Injectable()
export class UserService extends BaseService {


  users: Observable<User[]>;
  currentUser: AngularFireObject<User>;

 constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http
) {
  super();
  this.users = this.db.list<User>('/users').valueChanges();

  }

  create(user: User, uuid: string): Promise<void> {
    return this.db.object(`/users/${uuid}`)
      .set(user)
      .catch(this.handlePromiseError);
  }

  userExists(username: string): Observable<boolean> {
    return this.db.list(`/users`,
      (ref: firebase.database.Reference) => ref.orderByChild('username').equalTo(username)
    )
    .valueChanges()
    .map((users: User[]) => {
      return users.length > 0;
    }).catch(this.handleObservableError);

}
     }
