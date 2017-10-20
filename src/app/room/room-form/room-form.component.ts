import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    // private _30DayMonths: String[] = [ 'September', 'April', 'June', 'November' ];
    // public numArray = [];
    @Input()
    public roomId: string;


    constructor(public room: RoomService) {
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

    }

    private submittingForm() {
        // console.log(this._roomForm);
        const _reservation: IReservation = {
            email: this._roomForm.value.emailInput,
            reason: this._roomForm.value.reserveForInput,
            startDateTime: this._roomForm.value.startTimeInput,
            endDateTime: this._roomForm.value.endTimeInput
        };

        this.room.addReservation(this.roomId, _reservation);

        this._roomForm.reset();
    }

    public canDeactivate() {
        if (this._roomForm.pristine || this._roomForm.submitted) { return true;
        } else {
            return confirm('Changes will be lost. Continue?');
        }
    }


    // public isDayValid(day, month?) {
    //     console.log(month, day);
    //     if (month == null) {
    //         return false;
    //     }
    //     if (month === 'February' && day > 29) {
    //         return false;
    //     } else if (this._30DayMonths.indexOf(month) >= 0 && day > 30) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
}
