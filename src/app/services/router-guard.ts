import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from './login.service';

interface Test {
    a: string;
    b: string;
}

@Injectable()

export class LoginRouterGuard implements CanActivate {

    constructor( private login: LoginService) {

    }

    canActivate() {
        return this.login.getLoggedInUser() ? true : false;
    }
}
