import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task: Task;
  @Output() onDeleteTask = new EventEmitter<number>();
  @Output() onUpdateTask = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteTaskEvent(id: number) {
    this.onDeleteTask.emit(id);
  }

  onUpdateTaskEvent(task: Task) {
    this.onUpdateTask.emit(task);
  }
}