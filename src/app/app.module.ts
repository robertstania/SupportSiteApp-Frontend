import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from "./api.service";
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';



/*Other imports*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    AdminAddComponent,
    AdminListComponent,
    UserAddComponent,
    UserListComponent,
    TicketAddComponent,
    TicketListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'admin_login',
        component: AdminLoginComponent
      },
      {
        path: 'user_login',
        component: UserLoginComponent
      },
      {
        path: 'admin_dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'user_dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'admins',
        component: AdminListComponent
      },
      {
        path: 'tickets',
        component: TicketListComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'admins/add',
        component: AdminAddComponent
      },
      {
        path: 'admins/add/:id',
        component: AdminAddComponent
      },
      {
        path: 'tickets/add',
        component: TicketAddComponent
      },
      {
        path: 'tickets/add/:id',
        component: TicketAddComponent
      },
      {
        path: 'users/add',
        component: UserAddComponent
      },
      {
        path: 'users/add/:id',
        component: UserAddComponent
      },
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { };
