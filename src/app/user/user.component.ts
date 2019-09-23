import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  loginUsername: string = '';
  loginPassword: string = '';
  errorMessage: string = '';
  @ViewChild('addUserUsername', {static: false}) usernameInput:ElementRef;
  @ViewChild('addUserPassword', {static: false}) passwordInput:ElementRef;
  @ViewChild('addUserFirstname', {static: false}) firstnameInput:ElementRef;
  @ViewChild('addUserLastname', {static: false}) lastnameInput:ElementRef;

  constructor(private userService: UserService,
              private location: Location) {
    userService.get().subscribe((data) => {
      this.users = data;
    }, err => {
      if(err['error'] instanceof Object) {
        this.errorMessage = `Error ---> ${err['error'].title} : ${err['error'].status}`;
      } else {
        this.errorMessage = err['error'];
      }
    });    
   }

  ngOnInit() {
  }

  onLogOutUser() {
    localStorage.removeItem("authToken");
    window.location.reload();
  }

  onAuthUser() {
    this.userService.auth(this.loginUsername, this.loginPassword).subscribe((data) => {
      var token = (data as any).rawData.toString();
      localStorage.setItem("authToken", token);
      window.location.reload();
    }, err => {
        console.log(err['error']);
        this.errorMessage = `Authentication failed! ---> ${err['error'].title} : ${err['error'].status}`;
    })
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

  onUpdateItem(user: User) {
    let listUser = this.users.find(o => o.id === user.id);
    listUser = user;
  }

  onDeleteItem(id: number) {
    this.users = this.users.filter(o => o.id !== id);
  }
}
