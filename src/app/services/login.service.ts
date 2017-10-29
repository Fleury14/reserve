import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()

export class LoginService {
    // declare what will be our logged in user
    private _loggedInUser: Observable<firebase.User>;

    // inject necessary services and grab the user observable
    constructor(private router: Router, private _authService: AngularFireAuth) {
        this._loggedInUser = _authService.authState;
    }

    public login(authProvider): Promise<any> {

        // if there's a provider warning, remove it by navigating to same landing page without the fragment
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
        // note that logging out while viewing a room will boot the user out to the landing page with the warning
        if (this.router.url.includes('/room')) {
            this.router.navigate(['landing'], {fragment: 'show-warning'});
        }

        return this._authService.auth.signOut();

    }

    // this method is how other classes get the user logged in
    public getLoggedInUser(): Observable<firebase.User> {
        return this._loggedInUser;
    }

}
