import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './app-component';
import { NavComponent } from './nav/nav-component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
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
    declarations: [ RootComponent, NavComponent, routingComponents],
    imports: [ BrowserModule, AppRoutingModule ],
    bootstrap: [ RootComponent ]
})

export class AppModule {

}
