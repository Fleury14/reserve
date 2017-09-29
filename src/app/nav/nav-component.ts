import { Component } from '@angular/core';

import NavItem from '../../interfaces/nav-item';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav-styles.css']
})

export class NavComponent {

    public navArr: NavItem[];

    constructor() {
        console.log('Nav component initialized');
        this.navArr = [
            {
                name: 'whatever',
                display: 'Whatever Component',
                url: 'whatever'
            },

            {
                name: 'garbage',
                display: 'Garbage Component',
                url: 'garbage'
            }
        ];
        console.log(this.navArr);
    }

    alertTheUrl(url) {
        alert(url);
    }

}
