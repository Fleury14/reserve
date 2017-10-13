import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './app-component';
import { NavComponent } from './nav/nav-component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { RoomFormComponent} from './room/room-form/room-form.component';

import { LoginService } from './services/login.service';
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
    imports: [ BrowserModule, AppRoutingModule, FormsModule ],
    providers: [ LoginService ],
    bootstrap: [ RootComponent ]
})

export class AppModule {

}
