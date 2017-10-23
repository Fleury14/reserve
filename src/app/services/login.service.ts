import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class LoginService {

    private _loggedInUser;

    constructor(private router: Router) {
        this._loggedInUser = null;
    }

    public login() {
        this._loggedInUser = {
            name: 'J.R. Ruggiero'
        };
        console.log(this.router.url);
        if (this.router.url.includes('/landing#show-warning')) {
            this.router.navigateByUrl('landing');
        }
    }

    public logout() {
        this._loggedInUser = null;
        console.log(this.router.url);
        if (this.router.url.includes('/room')) {
            this.router.navigate(['landing'], {fragment: 'show-warning'});
        }

    }

    public getLoggedInUser() {
        return this._loggedInUser ? Object.assign({ }, this._loggedInUser) : null;
    }

    // public isLoggedIn() {
    //     console.log('Route guard is checking...');
    //     if (!this._loggedInUser) {
    //         console.log('RouterGuard passes false');
    //         return false;
    //     } else {
    //         console.log('RouterGuard passes true');
    //         return true;
    //     }
    // }
}
