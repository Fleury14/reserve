import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import IReservation from './../../../interfaces/reservation.interface';
import { ICanDeactivate } from './../../services/can-deactivate-guard.service';

import { RoomService } from './../../services/room.service';

@Component({
    selector: 'app-room-form',
    templateUrl: './room-form.component.html',
    styleUrls: [ './room-form.component.css' ]
})

export class RoomFormComponent implements OnInit, ICanDeactivate {
    // use ViewChild to be able to access roomForm,s children
    @ViewChild('roomForm')
    private _roomForm: NgForm;
    public options: string[];

    public roomId: string;

    // inject services
    constructor(public room: RoomService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    }

    ngOnInit() {
        // instantiate options
        this.options = [
            'Client Meeting',
            'Job Interview',
            'Game Session',
            'Scrum Meeting'
        ];

        // make sure the current roomID var is updated with the current room by using the change room. failing to do so
        // will not accurate update the database when you switch rooms, among other problems.
        this._activatedRoute.parent.paramMap.subscribe(param => {
            this._changeRoom(param.get('id'));
        });
    }

    // this is the method to update the roomid
    private _changeRoom(id: string) {
        this.roomId = id;
    }

    // method for submitting form. it will take in a set of values that will match the IReservation interface
    // because of this, the value names in the HTML MUST MATCH the interface values, otherwise you will run into problems.
    // this can be somewhat averted if we adjusted the data in this method, but its far less clean to do so
    private submittingForm(reservationValues: IReservation) {

    // use return to call the add reservation from the room service, use .then to navigate away from the form. this is so
    // the user can visibly see their reservation being added.
        return this.room.addReservation(this.roomId, reservationValues)
        .then(() => this._router.navigate(['../list'], { relativeTo: this._activatedRoute }));

    }

    // if the user tries to leave when the form is not pristine, send an alert to confirm.
    public canDeactivate() {
        if (this._roomForm.pristine || this._roomForm.submitted) { return true;
        } else {
            return confirm('Changes will be lost. Continue?');
        }
    }


}
