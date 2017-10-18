import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// import { RootComponent } from './app-component';
// import { NavComponent } from './nav/nav-component';
import { LandingComponent } from './landing/landing.component';
import { RoomComponent } from './room/room.component';

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
    component: LandingComponent
}


];

@NgModule({
    imports: [ RouterModule.forRoot(appRoute) ],
    exports: [ RouterModule ],
    providers: [ LoginRouterGuard, CanDeactivateService ]

})

export class AppRoutingModule {

 }

export const routingComponents = [LandingComponent, RoomComponent];
