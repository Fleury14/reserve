import { Component } from '@angular/core';
import { LoginComponent } from './../login/login.component';

import NavItem from '../../interfaces/nav-item';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav-styles.css'],

})

export class NavComponent {

    public navArr: NavItem[];

    constructor() {
        console.log('Nav component initialized');
        this.navArr = [
            {
                name: 'landing',
                display: 'Landing Component',
                url: 'landing'
            },

            {
                name: 'room1',
                display: 'Room One',
                url: 'room/one'
            },
            {
                name: 'room2',
                display: 'Room Two',
                url: 'room/two'
            },
            {
                name: 'room3',
                display: 'Room Three',
                url: 'room/three'
            }
        ];
        console.log(this.navArr);
    }



    alertTheUrl(url) {
        alert(url);
    }

}
