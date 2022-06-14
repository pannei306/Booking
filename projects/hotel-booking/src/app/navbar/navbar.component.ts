import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from '../Interfaces/navbar';
import { TooltipPosition } from '@angular/material/tooltip';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbar?: Navbar[];
  collapse = true;

  myFunction() {
    this.collapse = !this.collapse;
  }

  constructor() {}

  ngOnInit(): void {}

  // tooltips
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[1]);
  tooltipscontent = 'string';
  getTooltipContent() {
    this.tooltipscontent = 'Available Facilities';
  }
}
