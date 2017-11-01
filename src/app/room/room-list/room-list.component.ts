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

    // declare room that will hold our list. note that its typed to maintain intergrity
    public room: IRoom;


    // inject necessary services.. router and room. router will be used to get the current room
    // and room will be used to get the contents, and delete when necessary
    constructor( private _route: ActivatedRoute, private _roomService: RoomService) { }

    public ngOnInit() {

        // subscribe to the route using the PARENT parammap becuase the current param is list/form
        // then call the switch room function get get the reservations for that room. also note that
        // this is done oninit instead of in the constructor. furthermore, because its suscribed to the
        // route which then sunbscribes the room instead of just subscribing to the room, if the user clicks on a
        // different room, the list will adjust accordingly... which is pretty damn neat.
        this._route.parent.paramMap.subscribe(route => {
            this._switchRoom(route.get('id'));
        });

    }

    // the method to get the information for the current room. because its referred to in oninit it runs at least once, and
    // because its subscribed to the route, it alsoo is run when the route param changes
    private _switchRoom(id: string) {
        this._roomService.getRoomById(id).subscribe(room => { this.room = room; });
    }

    // simple method to call the deletion method inside the room service when necessary
    public deleteReservation(id) {
        if ( confirm('Are you sure you want to delete this reservation?') === true ) {
            this._roomService.deleteReservation(this.room.id, id);
        }

    }
}
