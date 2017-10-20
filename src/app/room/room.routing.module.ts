import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomComponent } from './room.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomListComponent } from './room-list/room-list.component';

import { LoginRouterGuard } from './../services/router-guard';

const routes: Routes = [{
    path: 'room/:id',
    component: RoomComponent,
    children: [
        {
            path: 'list',
            component: RoomListComponent
        },
        {
            path: 'form',
            component: RoomFormComponent
        },
        {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full'
        }
    ],
    canActivate: [ LoginRouterGuard ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ LoginRouterGuard ]
})

export class RoomRoutingModule {}

export const RoutingComponents = [ RoomFormComponent, RoomListComponent ];

