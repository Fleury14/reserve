import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import IReservation from './../../interfaces/reservation.interface';
import IRoom from './../../interfaces/room.interface';

@Injectable()

export class RoomService {

    // declare the room list that will hold an array of rooms and the observable
    private roomList: IRoom[];
    public roomsObservable: Observable<IRoom[]>;

    // inject angular database things into service
    constructor(private _roomDatabase: AngularFireDatabase) {

        // the observeable will note changes in the /rooms part of the database.
        // note that becyase of the typing, the result HAS to fit IRoom, or it won't work
        this.roomsObservable = this._roomDatabase.list('rooms').valueChanges<IRoom>();

        // after getting the observable from database, subscribe to it
        this.roomsObservable.subscribe(rooms => this.roomList = rooms);
    } // end constructor

    // this function takes in a room id, usually gotten from the activated route, and will return an observable
    // array of reservations. remember that when we grab the reservations, its a json object, so if we want to
    // do array things like .length, then we have to map it into an array
    public getRoomById(passedId): Observable<IRoom> {
        return this.roomsObservable.map((rooms: IRoom[]) => rooms.find(room => room.id === passedId))
        .map((room: IRoom) => {
            // the above begins the observable return by mapping the data from the whole blob of rooms into
            // just the one room with the .find command (neato). the second map will then map THAT object and below we will for/in
            // it and push it to an array
            const reservations = []; // reset array so its not concatting itself i.e. navbar bug

            // because the structure is actually room -> firebase's given id -> actual reservation, we do a little fiddling
            // with the for..in to make the structure of the array a little nicer. we grab each key, use bracket notation to get everything
            // in that key. put that key inside the reservation we just made, and put it into the array.
            for (let reservationKey in room.reservations) {
                const reservation = room.reservations[reservationKey];
                reservation.id = reservationKey;
                reservations.push(reservation);
            }

            room.reservations = reservations; // put said reservations into the room we're mapping

            return room; // and return it because async things need returning
        });
    }

    public addReservation(passedId: string, reservation: IReservation) {
        // adding a reservation is actually rather simple, just .list with the proper directory.. in this case its the id usually gotten
        // from route params, and push what you need to. note how use of typing what's being pushed in will help maintain 
        // database integrity
        return this._roomDatabase.list('rooms/' + passedId + '/reservations').push(reservation);

    }

    public deleteReservation(roomId, reservationId) {
        // only difference with the delete method is that we only need the id that firebase puts onto each reservation. that reservation id
        // is gotten in the html for the room-list.
        return this._roomDatabase.list('rooms/' + roomId + '/reservations').remove(reservationId);
    }

}
