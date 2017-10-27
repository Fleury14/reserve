import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './../login/login.component';

import NavItem from '../../interfaces/nav-item';

import 'rxjs/add/operator/do';

import { RoomService } from './../services/room.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.html',
    styleUrls: ['./nav-styles.css'],

})

export class NavComponent implements OnInit {
    // this will eventually hold the navigation items
    public navArr: NavItem[];

    // inject room service
    constructor(private _roomService: RoomService) { }

    ngOnInit() {

        this._roomService.roomsObservable
            .do(rooms => {
                this.navArr = [];
// We have to use .do to make sure that this is executed everytime there is a change in the database. failing to put the array reset
// above will result in the nav bar building a new set of nav items each time there is a change in the database.. which is what we want,
// but it will place the new ones in ADDITION to the old ones. also, the landing component is pushed because it will always be in the list
                        this.navArr.push({
                            name: 'landing',
                            display: 'Welcome',
                            url: 'landing'
                        });
                    }
            )
// use .map to take the room object and convert it into individual room first by nesting the map, then converting the data into an object
// that will fit the required NavItem interface. another benefit of typing
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
// finally, subscribe to that data and concat all the rooms on top of the welcome into the nav array. 
            .subscribe(rooms => {
                this.navArr = this.navArr.concat(rooms);
            });

    }


}
