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

    // declare boolean that will hold the result of candyact, current room, and current login info
    public CanIDeactivate: boolean;
    public room;
    public loggedInUser;

    // inject services and set candy to true by default, since forms will be pristine to start
    constructor(
        private actRout: ActivatedRoute,
        private loginService: LoginService,
        private _roomService: RoomService

    ) {
        this.CanIDeactivate = true;
    }

    public ngOnInit() {
        // subscribe to the switchroom method of getting the current room from the route parameter the same way we do in the room-list
       this.actRout.paramMap.subscribe(route => this._switchRoom(route.get('id')));

       // map the login data so that it gets both the picture and just the first name of the user. this is the reason we dont handle
       // the mapping inside the login servce; the way we handle it here is different than the nav compenet which takes the full name
       // if all the instances of the login service would need to be mapped the same way, THEN we would do it inside the service.
       this.loginService.getLoggedInUser()
       .map(user => {
           if (!user) {return; }
            const names = user.displayName.split(' ');
           return {
               displayName: names[0],
               pictureURL: user.photoURL
           };
       })
       .subscribe( user => {
           // after mapping it we then subscribe to that user since it may change if the user logs out
           this.loggedInUser = user;

       });
    }

    // the same method used in the room-list component
    private _switchRoom(id: string) {
        this._roomService.getRoomById(id).subscribe(room => this.room = room);
    }

    // this may not be necessary as the candyact logic is  in the roomform, not the room component. this may be just left over
    // from a previous classes where we introduced it.
    canDeactivate() {
        return this.CanIDeactivate;
    }
 }
