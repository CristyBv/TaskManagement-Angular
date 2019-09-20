import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task
  @ViewChild('taskTitle', {static: false}) titleInput:ElementRef;
  @ViewChild('taskContent', {static: false}) contentInput:ElementRef;
  @ViewChild('taskStartdate', {static: false}) startdateInput:ElementRef;
  @ViewChild('taskDeadline', {static: false}) deadlineInput:ElementRef;
  @ViewChild('taskPriority', {static: false}) priorityInput:ElementRef;
  @ViewChild('taskStatus', {static: false}) statusInput:ElementRef;
  @Output() onItemDelete = new EventEmitter<number>();

  constructor(private taskService: TaskService,
    private location: Location) { }

  ngOnInit() {
  }

  onUpdateTask(e) {
    e.preventDefault();
    this.task.title = this.titleInput.nativeElement.value;
    this.taskService.update(this.task.id, this.task).subscribe(() => this.goBack());
  }

  onDeleteTask(e) {
    e.preventDefault();
    this.taskService.delete(this.task.id).subscribe(() => {
      this.onItemDelete.emit(this.task.id);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
