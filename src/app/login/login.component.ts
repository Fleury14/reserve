import { Component } from '@angular/core';

import { LoginService } from './../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    private isUserLoggedIn = false;
    private authProvider: string;


    public login() {
        this.loginService.login();
        this.isUserLoggedIn = true;
        console.log('User logged in');
    }

    private logout() {
        this.loginService.logout();
        this.isUserLoggedIn = false;
        console.log('User logged out');
    }

    private dropdownGithub() {
        this.authProvider = 'Github';
    }

    private dropdownGoogle() {
        this.authProvider = 'Google';
    }

    get userName() {
        return this.loginService.getLoggedInUser();
    }

    constructor (private loginService: LoginService) {}

}
