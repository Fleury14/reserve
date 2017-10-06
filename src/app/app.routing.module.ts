import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// import { RootComponent } from './app-component';
// import { NavComponent } from './nav/nav-component';
import { LandingComponent } from './landing/landing.component';
import { RoomComponent } from './room/room.component';

const appRoute: Routes = [{
    path: 'landing',
    component: LandingComponent
}, {
    path: 'room',
    component: RoomComponent
}, {
    path: 'room/:id',
    component: RoomComponent
}

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoute) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

 }

export const routingComponents = [LandingComponent, RoomComponent];
