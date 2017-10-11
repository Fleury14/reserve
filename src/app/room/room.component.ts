import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from './../services/login.service';
import { ICanDeactivate } from './../services/can-deactivate-guard.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.html'
})

export class RoomComponent implements OnInit, ICanDeactivate {

    private thisId: string;
    public CanIDeactivate: boolean;

    constructor(
        private actRout: ActivatedRoute,
        private loginService: LoginService,

    ) {
        this.CanIDeactivate = true;
    }

    ngOnInit() {

        this.actRout.paramMap.subscribe((parameters: ParamMap) => {
            console.log(parameters.get('id'));
            console.log('params', parameters);
            this.thisId = parameters.get('id');

            if (this.thisId === null) { this.thisId = 'Null dawg'; }

        });
    }

    get userName() {
        return this.loginService.getLoggedInUser();
    }

    toggleCanDeactivate() {
        this.CanIDeactivate = !this.CanIDeactivate;
    }

    canDeactivate() {
        return this.CanIDeactivate;
    }
 }
