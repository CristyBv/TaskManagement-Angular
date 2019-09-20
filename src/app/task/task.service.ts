import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44373/tasks';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    return this.http.get<Task[]>(this.accessPointUrl, {headers: this.headers});
  }

  public getById(id: number) {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.get(url, {headers: this.headers});
  }

  public update(id: number, task: Task) {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.put(url, task, {headers: this.headers});
  }

  public add(task: Task) {
    console.log(task);
    return this.http.post(this.accessPointUrl, task, {headers: this.headers});
  }

  public delete(id: number) {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }
}
