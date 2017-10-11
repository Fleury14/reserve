import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {

    private _loggedInUser;

    constructor() {
        this._loggedInUser = null;
    }

    public login() {
        this._loggedInUser = {
            name: 'J.R. Ruggiero'
        };
    }

    public logout() {
        this._loggedInUser = null;
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
