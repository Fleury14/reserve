import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';


interface Test {
    a: string;
    b: string;
}

@Injectable()

export class LoginRouterGuard implements CanActivate {

    private _loggedIn: Boolean;


    constructor( private login: LoginService, private route: Router) {

    }

    canActivate() {

      return this.login.getLoggedInUser().map(
          loggedInUser => {
              if (loggedInUser) { return true; }

              this.route.navigate(['landing'], {fragment: 'show-warning'});

              return false;
          }
      );

    }
}
