import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/login.service';



@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: [ './landing.component.css' ]
})

export class LandingComponent implements OnInit {

    public noProviderError: boolean = null;
    public showWarning: boolean = null;
    constructor(private route: ActivatedRoute, login: LoginService) {

    }

    ngOnInit() {

        // console.log('params', this.route.snapshot.fragment);
        this.route.fragment.subscribe({
            next: data => {
                console.log(data);
                this.checkForWarning(data);
            },
            error: error => {console.log(error); },
            complete: () => {
                console.log('Done!!');
            }
        });
    }

    private checkForWarning(data) {
        if (data === 'show-warning') {
            this.showWarning = true;
        } else if (data === 'no-provider') {
            this.noProviderError = true;
        } else {
            this.showWarning = false;
            this.noProviderError = false;
        }
    }
}
