import { Component } from '@angular/core';
import { LoginComponent } from './../login/login.component';

import NavItem from '../../interfaces/nav-item';


import { RoomService } from './../services/room.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav-styles.css'],

})

export class NavComponent {

    public navArr: NavItem[];

    constructor(private _roomService: RoomService) {

        this.navArr = [];

        this.navArr.push({
            name: 'landing',
            display: 'Welcome',
            url: 'landing'
        });

        this._roomService.roomsObservable
            .map(rooms => {
                return rooms.map(room => {
                    const navItem: NavItem = {
                        name: room.id,
                        display: room.name,
                        url: 'room/' + room.id
                    };
                    return navItem;
                });
            })
            .subscribe(rooms => {
                this.navArr = this.navArr.concat(rooms);
            });

        // console.log('Nav component initialized');
        // this.navArr = [
        //     {
        //         name: 'landing',
        //         display: 'Welcome',
        //         url: 'landing'
        //     },

        //     {
        //         name: 'mario',
        //         display: 'Mario',
        //         url: 'room/mario'
        //     },
        //     {
        //         name: 'zelda',
        //         display: 'Zelda',
        //         url: 'room/zelda'
        //     },
        //     {
        //         name: 'dk',
        //         display: 'Donkey Kong',
        //         url: 'room/dk'
        //     },
        //     {
        //         name: 'halo',
        //         display: 'Halo',
        //         url: 'room/halo'
        //     }
        // ];
        // console.log(this.navArr);
    }



    alertTheUrl(url) {
        alert(url);
    }

}
