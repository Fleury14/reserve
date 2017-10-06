import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from './../services/login.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.html'
})

export class RoomComponent implements OnInit {

    private thisId: string;

    constructor(private actRout: ActivatedRoute, private loginService: LoginService) {}

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
 }
