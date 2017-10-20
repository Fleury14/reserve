import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RootComponent } from './app-component';
import { NavComponent } from './nav/nav-component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { RoomFormComponent} from './room/room-form/room-form.component';

import { LoginService } from './services/login.service';
import { RoomService } from './services/room.service';
// import { WhateverComponent } from './whatever/whatever-component';
// import { GarbageComponent } from './garbage/garbage-component';

// const appRoute: Routes = [{
//     path: 'garbage',
//     component: GarbageComponent
// }, {
//     path: 'whatever',
//     component: WhateverComponent
// }];

@NgModule({
    declarations: [ RootComponent, NavComponent, routingComponents, LoginComponent, RoomFormComponent],
    imports: [ BrowserModule, AppRoutingModule, FormsModule, AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule ],
    providers: [ LoginService, RoomService ],
    bootstrap: [ RootComponent ]
})

export class AppModule {

}
