import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomFormComponent } from './room-form/room-form.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [{
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
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoomRoutingModule {}

export const RoutingComponents = [ RoomFormComponent, RoomListComponent ]

