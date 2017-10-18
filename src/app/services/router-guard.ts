import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';


interface Test {
    a: string;
    b: string;
}

@Injectable()

export class LoginRouterGuard implements CanActivate {

    constructor( private login: LoginService, private route: Router) {

    }

    canActivate() {

        if (this.login.getLoggedInUser()) {
            return true;
        } else  {
            this.route.navigate(['landing'], {fragment: 'show-warning'});
            return false;
        }

    }
}
