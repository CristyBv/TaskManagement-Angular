import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  @ViewChild('addUserUsername', {static: false}) usernameInput:ElementRef;
  @ViewChild('addUserPassword', {static: false}) passwordInput:ElementRef;
  @ViewChild('addUserFirstname', {static: false}) firstnameInput:ElementRef;
  @ViewChild('addUserLastname', {static: false}) lastnameInput:ElementRef;

  constructor(private userService: UserService) {
    userService.get().subscribe((data) => {
      this.users = data;
    });
    
   }

  ngOnInit() {
  }

  onUserSelected(user: User){
    this.selectedUser = user;
  }

  onAddUser() {
    const user = new User(this.usernameInput.nativeElement.value,
      this.passwordInput.nativeElement.value,
      this.firstnameInput.nativeElement.value,
      this.lastnameInput.nativeElement.value);
    this.userService.add(user)
      .subscribe((data) => this.users.push(data as User));
  }

}
