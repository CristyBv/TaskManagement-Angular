import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User
  @ViewChild('userUsername', {static: false}) usernameInput:ElementRef;
  @ViewChild('userFirstname', {static: false}) firstnameInput:ElementRef;
  @ViewChild('userLastname', {static: false}) lastnameInput:ElementRef;
  

  constructor(private userService: UserService,
    private location: Location) { }

  ngOnInit() {
  }

  onUpdateUser(e) {
    e.preventDefault();
    this.user.username = this.usernameInput.nativeElement.value;
    this.user.firstname = this.firstnameInput.nativeElement.value;
    this.user.lastname = this.lastnameInput.nativeElement.value;
    this.userService.update(this.user.id, this.user).subscribe(() => this.goBack());
  }

  onDeleteUser(e) {
    e.preventDefault();
    this.userService.delete(this.user.id).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
