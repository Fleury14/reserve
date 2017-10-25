import { Component, OnInit } from '@angular/core';

import { LoginService } from './../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    private authProvider: string;

    public loggedInUser;


    ngOnInit() {

        this.loginService.getLoggedInUser()
            .map(user => {
                if (!user) {return; }

                return {
                    displayName: user.displayName,
                    pictureURL: user.photoURL
                };
            })
            .subscribe( user => {this.loggedInUser = user;
            });
    }

    public login() {
        this.loginService.login();
        console.log('User logged in');
    }

    private logout() {
        this.loginService.logout();
        console.log('User logged out');
    }

    private dropdownGithub() {
        this.authProvider = 'Github';
    }

    private dropdownGoogle() {
        this.authProvider = 'Google';
    }

    // get userName() {
    //     return this.loginService.getLoggedInUser();
    // }

    constructor (private loginService: LoginService) {}

}
