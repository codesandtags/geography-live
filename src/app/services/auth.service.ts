import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) {
  }

  public login(email: string, password) {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
          userData => resolve(userData),
          error => reject(error));
    });
  }

  public getAuth(): Observable<any> {
    return this.firebaseAuth.authState;
  }

  public logout() {
    this.firebaseAuth.auth.signOut();
  }
}
