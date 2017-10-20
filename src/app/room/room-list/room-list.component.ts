import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import IReservation from './../../../interfaces/reservation.interface';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {

    public currentRoomReservations: IReservation[];

    public roomId: string;

    constructor( private _route: ActivatedRoute) { }

    public ngOnInit() {
        this.currentRoomReservations = [];

        this._route.parent.paramMap.subscribe(param => {
            this._switchRoom(param.get('id'));
        });
    }

    private _switchRoom(id: string) {
        this.roomId = id;
    }
}
