import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user/user.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './Task/task-detail/task-detail.component';
import { TaskItemComponent } from './Task/task-item/task-item.component';
import { TaskService } from './task/task.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    UserComponent,
    UserDetailComponent,
    UserItemComponent,
    TaskComponent,
    TaskDetailComponent,
    TaskItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
