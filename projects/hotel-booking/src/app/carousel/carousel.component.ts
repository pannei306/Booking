import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbCarousel, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { City } from '../Interfaces/city';
import { CityService } from '../services/city.service';
// import { City } from '../Interfaces/city';
// import { CityService } from '../services/city.service';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';
  city?: City[];
  cities: any;
  @Input('isLike') isLike: Boolean = true;
  @Output() childToParent: EventEmitter<string> = new EventEmitter<string>();

  emit(keyword: any) {
    this.childToParent.emit(keyword);
  }

  constructor(private Service: CityService) {}

  ngOnInit() {
    this.Service.getCity().subscribe((data) => {
      this.cities = data;
    });
  }

  //select
  toggleShow(city: any) {
    for (let ct of this.cities) {
      if (ct.town == city.town) {
        ct.isLike = false;
      } else {
        ct.isLike = true;
      }
    }
  }

  // for ripple
  rippleColor: string = '#28a7454d';
  unbounded: boolean = false;
  disabled: boolean = false;
  centered = true;

  onClick(town: string) {
    // this.hotels = this.hotels.filter((x:any) => x.city.town == town);
  }
}
