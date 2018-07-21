import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var sendHome = false;
    sendHome = !this.user.getUserLoggedIn();

    console.log('Send back Home?' + sendHome);

    if (sendHome) {
      this.router.navigate(['/']);
    }

    return this.user.getUserLoggedIn();
  }
}
