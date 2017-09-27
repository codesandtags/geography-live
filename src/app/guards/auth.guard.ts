import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.firebaseAuth.authState.map(auth => {
      if (!auth) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }

}
