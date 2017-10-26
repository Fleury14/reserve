import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()

export class LoginService {

    private _loggedInUser: Observable<firebase.User>;

    constructor(private router: Router, private _authService: AngularFireAuth) {
        this._loggedInUser = _authService.authState;
    }

    public login(authProvider): Promise<any> {
        // console.log(this.router.url);
        // remove login warning by navigating to same landing page without the fragment
        if (this.router.url.includes('/landing#show-warning') || this.router.url.includes('/landing#no-provider')) {
            this.router.navigateByUrl('landing');
        }

        // check auth provider
        if (authProvider === 'Google') { // if its google..
            return this._authService.auth.signInWithPopup((new firebase.auth.GoogleAuthProvider));
        } else if (authProvider === 'Github') { // otherwise if its github...
            return this._authService.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
        } else { // otherwise throw an error
            console.log('Error: Incorrect proivder called to login service:', authProvider);
            this.router.navigate(['landing'], {fragment: 'no-provider'});
            return null;
        }

    }

    public logout(): Promise<any> {
        // console.log(this.router.url);
        if (this.router.url.includes('/room')) {
            this.router.navigate(['landing'], {fragment: 'show-warning'});
        }

        return this._authService.auth.signOut();

    }

    public getLoggedInUser(): Observable<firebase.User> {
        return this._loggedInUser;
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
