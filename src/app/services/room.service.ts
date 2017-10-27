import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import IReservation from './../../interfaces/reservation.interface';
import IRoom from './../../interfaces/room.interface';

@Injectable()

export class RoomService {

    private roomList: IRoom[];
    public roomsObservable: Observable<IRoom[]>;

    constructor(private _roomDatabase: AngularFireDatabase) {

        this.roomsObservable = this._roomDatabase.list('rooms').valueChanges<IRoom>();

        this.roomsObservable.subscribe(rooms => this.roomList = rooms);
        // this.roomList = [];

        // this.roomList.push({
        //     id: 'mario',
        //     name: 'Mario',
        //     picture: null,
        //     reservations: []
        // });
        // this.roomList.push({
        //     id: 'zelda',
        //     name: 'Zelda',
        //     picture: null,
        //     reservations: []
        // });
        // this.roomList.push({
        //     id: 'dk',
        //     name: 'Donkey Kong',
        //     picture: null,
        //     reservations: []
        // });
        // this.roomList.push({
        //     id: 'halo',
        //     name: 'Halo',
        //     picture: null,
        //     reservations: []
        // });
    }

    public getRoomById(passedId): Observable<IRoom> {
        return this.roomsObservable.map((rooms: IRoom[]) => rooms.find(room => room.id === passedId))
        .map((room: IRoom) => {
            const reservations = [];

            for (let reservationKey in room.reservations) {
                const reservation = room.reservations[reservationKey];
                reservation.id = reservationKey;
                reservations.push(reservation);
            }

            room.reservations = reservations;

            return room;
        });
    }

    public addReservation(passedId: string, reservation: IReservation) {

        return this._roomDatabase.list('rooms/' + passedId + '/reservations').push(reservation);
        // this.getRoomById(passedId).reservations.push({
        //     email: reservation.email,
        //     reason: reservation.reason,
        //     startDateTime: reservation.startDateTime,
        //     endDateTime: reservation.endDateTime
        // });

        // console.log(this.roomList);
    }

    public deleteReservation(roomId, reservationId) {
        return this._roomDatabase.list('rooms/' + roomId + '/reservations').remove(reservationId);
    }

    // public getReservations(roomId) {
    //     if (this.getRoomById(roomId).reservations.length === 0) {
    //         return null;
    //     } else {
    //         return this.getRoomById(roomId).reservations;
    //     }
    //     console.log(`roomid is:`, roomId);
    //     console.log(`rooms reservations`, this.getRoomById(roomId));
    //     console.log(`buuuut entire room array is`, this.roomList);

    // }
}
