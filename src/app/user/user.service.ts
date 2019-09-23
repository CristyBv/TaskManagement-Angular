import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from './user.model';
import { Auth } from '../auth/auth.model';

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

  public update(id: number, user: User) {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.put(url, user, {headers: this.headers});
  }

  public add(user: User) {
    const url = `${this.accessPointUrl}/register`;    
    return this.http.post(url, user, {headers: this.headers});
  }

  public delete(id: number) {
    const url = `${this.accessPointUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }

  public auth(username: string, password: string) {
    const url = `${this.accessPointUrl}/authenticate`;
    return this.http.post(url, new Auth(username, password), {headers: this.headers} )
  }
}
