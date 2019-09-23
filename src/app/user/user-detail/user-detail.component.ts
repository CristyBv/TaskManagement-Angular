import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User
  @Output() onUpdateUserItem = new EventEmitter<User>();
  @Output() onDeleteUserItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onUpdateUser(user: User) {
    this.onUpdateUserItem.emit(user);
  }

  onDeleteUser(id: number) {
    this.onDeleteUserItem.emit(id);
  }
}
