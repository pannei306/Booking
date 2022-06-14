import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hotel } from '../Interfaces/hotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  hotels?: Hotel[];
  // facilities = ['Parking', 'Breakfast', 'Free Wifi', '+9'];
  private cityUrl = 'http://localhost:3000/hotels';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getHotel(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.cityUrl);
  }
}
