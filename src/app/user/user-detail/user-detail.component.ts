import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: User  

  constructor() { }

  ngOnInit() {
  }

}
