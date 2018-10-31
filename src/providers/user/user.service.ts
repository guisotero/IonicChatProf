import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';



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

  }

      create(user: User): Promise<void> {
        return Promise.resolve(this.db.list('/users').push(user));
    }



}
