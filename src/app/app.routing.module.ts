import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LandingComponent } from './landing/landing.component';
import { RoomComponent } from './room/room.component';
import { Four04Component } from './four04/four04.component';

import { LoginRouterGuard } from './services/router-guard';
import { CanDeactivateService } from './services/can-deactivate-guard.service';

const appRoute: Routes = [{
    path: 'landing',
    component: LandingComponent
}, {
    path: 'room',
    component: RoomComponent,
    canActivate: [ LoginRouterGuard ]
}, {
    path: 'room/:id',
    component: RoomComponent,
    canActivate: [ LoginRouterGuard ],
    canDeactivate: [ CanDeactivateService ]
}, {
    path: '**',
    component: Four04Component
}


];

@NgModule({
    imports: [ RouterModule.forRoot(appRoute) ],
    exports: [ RouterModule ],
    providers: [ LoginRouterGuard, CanDeactivateService ]

})

export class AppRoutingModule {

 }

export const routingComponents = [LandingComponent, RoomComponent, Four04Component];
