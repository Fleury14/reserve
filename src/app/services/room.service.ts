import { Injectable } from '@angular/core';

import IReservation from './../../interfaces/reservation.interface';
import IRoom from './../../interfaces/room.interface';

@Injectable()

export class RoomService {

    private roomList: IRoom[];

    constructor() {
        this.roomList = [];

        this.roomList.push({
            id: 'mario',
            name: 'Mario',
            picture: null,
            reservations: []
        });
        this.roomList.push({
            id: 'zelda',
            name: 'Zelda',
            picture: null,
            reservations: []
        });
        this.roomList.push({
            id: 'dk',
            name: 'Donkey Kong',
            picture: null,
            reservations: []
        });
        this.roomList.push({
            id: 'halo',
            name: 'Halo',
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
