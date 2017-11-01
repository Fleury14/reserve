import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { LoginService } from './../services/login.service';
import { RoomService } from './../services/room.service';

import { ICanDeactivate } from './../services/can-deactivate-guard.service';

// BEGIN ANIMATIONS OUTSIDE OF EXPORT
// inside the animation array, set the trigger to begin the animations, in this case when the component loads (onLoad)
// inside the trigger, define the different states and the styles within each then use transition to define how
// the pages goes from one state to next. it should also be noted that use of onload does require the element to have
// [@onLoad]="state" attached inside the HTML. also not that even while deifning the transition, you still have to
// denote in the TS below where the state changes will actually take place. in this case its in  the onInit
// and the switch room function 

const animations = [
    trigger('onLoad', [
        state('init', style({
            right: '200px',
            opacity: 0
        })),
        state('complete', style({
            right: '0px',
            opacity: 1
        })),
        transition('init => complete', animate('220ms ease-out'))
    ])
];

// add the animation array as part of styleUrls, but outside of that array

@Component({
    selector: 'app-room',
    templateUrl: './room.html',
    styleUrls: [ './room.component.css' ], animations
})

export class RoomComponent implements OnInit, ICanDeactivate {

    // declare boolean that will hold the result of candyact, current room, and current login info
    public CanIDeactivate: boolean;
    public room;
    public loggedInUser;

    // declare state that will be used for animations
    public state: string;

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
       this.actRout.paramMap.subscribe(route => {

        // use the initial suscribe as the starting point for the animation to be set to init
           this.state = 'init';
           this._switchRoom(route.get('id'));
        });

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
        this._roomService.getRoomById(id).subscribe(room => {
            // use switch room as the trigger to move to 'complete' state. since this will always be invoked immediately following
            //  the subscription, we ensure that the animation will trigger as fast as possible
            this.state = 'complete';
            this.room = room;
        });
    }

    // this may not be necessary as the candyact logic is  in the roomform, not the room component. this may be just left over
    // from a previous classes where we introduced it.
    canDeactivate() {
        return this.CanIDeactivate;
    }
 }
