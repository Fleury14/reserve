import { Component, OnInit } from '@angular/core';

import { LoginService } from './../services/login.service';

import 'rxjs/add/operator/map';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public authProvider: string;

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
            .subscribe( user => {
                this.loggedInUser = user;
                // console.log(this.loggedInUser.displayName);
            });
    }

    public login(authProvider) {
        this.loginService.login(authProvider);
        console.log('User logged in');
    }

    public logout() {
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
