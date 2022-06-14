import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interface/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  items?: User[];
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  constructor(private http: HttpClient) {}
}
