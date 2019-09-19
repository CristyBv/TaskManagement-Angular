import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'https://localhost:44373/users';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    return this.http.get<User[]>(this.accessPointUrl, {headers: this.headers});
  }

  public update(id: Int16Array, user: User) {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.put(url, user, {headers: this.headers});
  }

  public add(user: User) {
    const url = `${this.accessPointUrl}/register`;    
    return this.http.post(url, user, {headers: this.headers});
  }

  public delete(id: Int16Array) {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }
}
