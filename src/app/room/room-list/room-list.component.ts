import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import IReservation from './../../../interfaces/reservation.interface';
import IRoom from '../../../interfaces/room.interface';

import { RoomService } from './../../services/room.service';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.css']
})

export class RoomListComponent implements OnInit {

    // public currentRoomReservations: IReservation[];

    // public roomId: string;

    public room: IRoom;

    constructor( private _route: ActivatedRoute, private _roomService: RoomService) { }

    public ngOnInit() {
        // this.currentRoomReservations = [];

        this._route.parent.paramMap.subscribe(route => {
            this._switchRoom(route.get('id'));
        });

    }

    private _switchRoom(id: string) {
        this._roomService.getRoomById(id).subscribe(room => { this.room = room; });


    }
}
