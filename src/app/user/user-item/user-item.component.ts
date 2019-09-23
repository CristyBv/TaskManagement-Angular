import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  //@ViewChild('errorMessage', {static: false}) errorMessage:ElementRef;
  @Output() onUpdateUserEvent = new EventEmitter<User>();
  @Output() onDeleteUserEvent = new EventEmitter<number>();
  errorMessage: string = '';
  

  constructor(private userService: UserService,
    private location: Location) { }

  ngOnInit() {
  }

  onUpdateUser(e) {
    e.preventDefault();
    this.user.username = this.usernameInput.nativeElement.value;
    this.user.firstname = this.firstnameInput.nativeElement.value;
    this.user.lastname = this.lastnameInput.nativeElement.value;
    this.userService.update(this.user.id, this.user)
      .pipe(
        catchError(this.handleError)
      ).subscribe(() => {
        this.onUpdateUserEvent.emit(this.user);
      }, err => {
        this.errorMessage = 'Service unavailable at this moment!';
      });
  }

  onDeleteUser(e) {
    e.preventDefault();
    this.userService.delete(this.user.id).subscribe(() => {
      this.onDeleteUserEvent.emit(this.user.id);
    });
  }

  goBack(): void {
    this.location.back();
  }

  handleError(error: HttpErrorResponse) {
    // console.log("dadasd");
    // this.errorMessage = 'Something bad happened; please try again later.';
    // console.warn(this.errorMessage);
    if (error.error instanceof ErrorEvent) {
      
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.errorMessage = 'Something bad happened; please try again later.';
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
