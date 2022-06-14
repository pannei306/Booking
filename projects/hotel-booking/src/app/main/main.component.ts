import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CityService } from './../services/city.service';
import { City } from '../Interfaces/city';
import { NgbSlideEvent, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
// import { HotelComponent } from '../hotel/hotel.component';
import { HotelService } from '../services/hotel.service';
@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  city?: City[];
  cities: any;
  hotels: any;

  constructor(private Service: CityService) {}

  ngOnInit() {
    this.Service.getCity().subscribe((data) => {
      this.cities = data;
    });
  }

  childToParent(town: any) {
    this.hotels = this.hotels.filter((x: any) => x.city.town == town);
  }
}
