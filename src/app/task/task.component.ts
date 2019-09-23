import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[];
  selectedTask: Task;
  @ViewChild('addTaskTitle', {static: false}) titleInput:ElementRef;
  @ViewChild('addTaskContent', {static: false}) contentInput:ElementRef;
  @ViewChild('addTaskStartdate', {static: false}) startdateInput:ElementRef;
  @ViewChild('addTaskDeadline', {static: false}) deadlineInput:ElementRef;
  @ViewChild('addTaskPriority', {static: false}) priorityInput:ElementRef;
  @ViewChild('addTaskStatus', {static: false}) statusInput:ElementRef;

  constructor(private taskService: TaskService) {
    taskService.get().subscribe((data) => {
      this.tasks = data;
    });  
 }

  ngOnInit() {
  }
  
  onTaskSelected(task: Task){
    this.selectedTask = task;
  }
  
  onAddTask() {
    const task = new Task(this.titleInput.nativeElement.value,
      this.contentInput.nativeElement.value,
      this.startdateInput.nativeElement.value,
      this.deadlineInput.nativeElement.value,
      this.priorityInput.nativeElement.value,
      this.statusInput.nativeElement.value);
    this.taskService.add(task)
      .subscribe((data) => this.tasks.push(data as Task));
  }
  
  deleteItem(id: number) {
    this.tasks = this.tasks.filter(o => o.id !== id);
  }

  updateItem(task: Task) {
    let listTask = this.tasks.find(o => o.id === task.id) 
    listTask = task;
  }
}
