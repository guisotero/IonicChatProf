import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


import { FirebaseApp } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";
import { User } from "../../models/user.model";

@Injectable()
export class UserService {

  
constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp,
    public http: Http
) {
    console.log('Hello UserProvider Provider');
  }
 
  create(user: User, uuid: string): Promise<void> {
    return this.db.object(`/users/${uuid}`)
      .set(user)
}
}