import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoomModule } from './room/room.module';
// import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RootComponent } from './app-component';
import { NavComponent } from './nav/nav-component';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { LoginComponent } from './login/login.component';
// import { RoomFormComponent} from './room/room-form/room-form.component';
// import { RoomListComponent } from './room/room-list/room-list.component';

import { LoginService } from './services/login.service';
import { RoomService } from './services/room.service';


@NgModule({
    declarations: [ RootComponent, NavComponent, routingComponents, LoginComponent],
    imports: [ BrowserModule, RoomModule, AppRoutingModule, AngularFireModule.initializeApp(environment.firebase), AngularFireAuthModule,
    AngularFireDatabaseModule ],
    providers: [ LoginService, RoomService ],
    bootstrap: [ RootComponent ]
})

export class AppModule {

}
