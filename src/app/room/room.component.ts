import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from './../services/login.service';
import { RoomService } from './../services/room.service';

import { ICanDeactivate } from './../services/can-deactivate-guard.service';

@Component({
    selector: 'app-room',
    templateUrl: './room.html',
    styleUrls: [ './room.component.css' ]
})

export class RoomComponent implements OnInit, ICanDeactivate {

    private thisId: string;
    public CanIDeactivate: boolean;
    public room;

    constructor(
        private actRout: ActivatedRoute,
        private loginService: LoginService,
        private _roomService: RoomService

    ) {
        this.CanIDeactivate = true;
    }

    public ngOnInit() {

        this.actRout.paramMap.subscribe(route => this._switchRoom(route.get('id')));
    }

    private _switchRoom(id: string) {
        this._roomService.getRoomById(id).subscribe(room => this.room = room);
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
