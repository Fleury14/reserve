import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule, RoutingComponents } from './room.routing.module';



import { RoomService } from './../services/room.service';

@NgModule({
    declarations: [ RoutingComponents ],
    imports: [ FormsModule, RoomRoutingModule, CommonModule ],
    providers: [ RoomService ]
})

export class RoomModule { }
