import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './app-component';
import { NavComponent } from './nav/nav-component';
import { WhateverComponent } from './whatever/whatever-component';
import { GarbageComponent } from './garbage/garbage-component';

const appRoute: Routes = [{
    path: 'garbage',
    component: GarbageComponent
}, {
    path: 'whatever',
    component: WhateverComponent
}];

@NgModule({
    declarations: [ RootComponent, NavComponent, WhateverComponent, GarbageComponent ],
    imports: [ BrowserModule, RouterModule.forRoot(appRoute) ],
    bootstrap: [ RootComponent, NavComponent, WhateverComponent, GarbageComponent ]
})

export class AppModule {

}
