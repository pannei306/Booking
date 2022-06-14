import { City } from './../Interfaces/city';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HotelService } from './../services/hotel.service';
import { Hotel } from '../Interfaces/hotel';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  @Input() keyword:string='';
  hotel?: Hotel[];
  hotels: any;
  thishotel:any;
  // allhotel:any;
  // tooltips
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  tooltipscontent = 'string';
  getTooltipContent() {
    this.tooltipscontent = 'Available Facilities';
  }

  constructor(private Service: HotelService) {
    // tooltips
    this.tooltipscontent = 'defaultMessage';
  }

  ngOnInit() {
    this.Service.getHotel().subscribe((data) => {
      this.hotels = data;
      this. thishotel= data;
      // this.hotels = data.filter((x) => x.location == 'Nyaung U, Bagan');
      //  console.log(data);
    });
  }


}
