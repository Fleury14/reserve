import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-404',
    templateUrl: './four04.component.html',
    styleUrls: [ './four04.component.css' ]
})

export class Four04Component {

    constructor( private route: Router ) {}

    public goBackHome() {
        this.route.navigateByUrl('landing');
    }
}
