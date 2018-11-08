import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map'


import * as firebase from 'firebase/app';
import { BaseService } from '../base.service';


@Injectable()
export class AuthService extends BaseService {

  constructor(
    public http: HttpClient,
    public afAuth:AngularFireAuth,
    ){
      super();

  console.log('Hello AuthProvider Provider');
  }
  createAuthUser(user: {email: string, password: string}): Promise<firebase.User> {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .catch(this.handlePromiseError);
  }

  signinWithEmail(user: {email: string, password: string}): Promise<boolean> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((authUser: firebase.User) => {
          return authUser != null;
      }).catch(this.handlePromiseError);
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

}
