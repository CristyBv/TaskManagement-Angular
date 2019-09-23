import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './user/user.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserItemComponent } from './user/user-item/user-item.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskItemComponent } from './task/task-item/task-item.component';
import { TaskService } from './task/task.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AuthInterceptor } from './auth/auth.interceptor';

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
    AuthComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    TaskService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
