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

    @ViewChild('roomForm')
    private _roomForm: NgForm;
    public options: string[];

    public roomId: string;


    constructor(public room: RoomService, private _activatedRoute: ActivatedRoute, private _router: Router) {
        // for (let days = 1; days < 29; days++) {
        //     this.numArray.push(days);
        // }
    }

    ngOnInit() {
        this.options = [
            'Client Meeting',
            'Job Interview',
            'Game Session',
            'Scrum Meeting'
        ];

        this._activatedRoute.parent.paramMap.subscribe(param => {
            this._changeRoom(param.get('id'));
        });
    }

    private _changeRoom(id: string) {
        this.roomId = id;
    }

    private submittingForm(reservationValues: IReservation) {


        // console.log('Reservation submitted with the following values:', _reservation);
        console.log('reservation values:', reservationValues);
        return this.room.addReservation(this.roomId, reservationValues)
        .then(() => this._router.navigate(['../list'], { relativeTo: this._activatedRoute }));

        // this._roomForm.reset();
    }

    public canDeactivate() {
        if (this._roomForm.pristine || this._roomForm.submitted) { return true;
        } else {
            return confirm('Changes will be lost. Continue?');
        }
    }


}
