import { Injectable } from '@angular/core';

import IReservation from './../../interfaces/reservation.interface';
import IRoom from './../../interfaces/room.interface';

@Injectable()

export class RoomService {

    private roomList: IRoom[];

    constructor() {
        this.roomList = [];

        this.roomList.push({
            id: 'one',
            name: 'Room One',
            picture: null,
            reservations: []
        });
        this.roomList.push({
            id: 'two',
            name: 'Room Two',
            picture: null,
            reservations: []
        });
        this.roomList.push({
            id: 'three',
            name: 'Room Three',
            picture: null,
            reservations: []
        });
    }

    public getRoomById(passedId) {
        return this.roomList.find(room => room.id === passedId);
    }

    public addReservation(passedId: string, reservation: IReservation) {
        this.getRoomById(passedId).reservations.push({
            email: reservation.email,
            reason: reservation.reason,
            startDateTime: reservation.startDateTime,
            endDateTime: reservation.endDateTime
        });

        console.log(this.roomList);
    }
}
