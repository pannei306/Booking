import { City } from './city';

export interface Hotel {
  mainPic: string;
  sidePic: string;
  title: string;
  rating?: any;
  location: string;
  facilities: any;
  review: number;
  price: number;
  checkAvailability?: string;
  city: City;
}
