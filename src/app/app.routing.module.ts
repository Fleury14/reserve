import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// import { RootComponent } from './app-component';
// import { NavComponent } from './nav/nav-component';
import { WhateverComponent } from './whatever/whatever-component';
import { GarbageComponent } from './garbage/garbage-component';

const appRoute: Routes = [{
    path: 'garbage',
    component: GarbageComponent
}, {
    path: 'whatever',
    component: WhateverComponent
}, {
    path: 'garbage/:id',
    component: GarbageComponent
}

];

@NgModule({
    imports: [ RouterModule.forRoot(appRoute) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

 }

export const routingComponents = [WhateverComponent, GarbageComponent];
