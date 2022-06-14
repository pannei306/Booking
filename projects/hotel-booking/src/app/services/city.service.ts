import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { City } from '../Interfaces/city';
@Injectable({
  providedIn: 'root',
})
export class CityService {
  items?: City[];
  private cityUrl = ' http://localhost:3000/cities';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getCity(): Observable<City[]> {
    return this.http.get<City[]>(this.cityUrl);
  }
}
