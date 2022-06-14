import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cities = [
      {
        img: 'assets/images/shwedagon4.jpg',
        town: 'Yangon',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
      {
        img: 'assets/images/bagan1.jpg',
        town: 'Bagan',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
      {
        img: 'assets/images/mandalay.jpg',
        town: 'Mandalay',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
      {
        img: 'assets/images/kalaw.jpg',
        town: 'Kalaw',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
      {
        img: 'assets/images/Taunggyi.jpg',
        town: 'Taunggyi',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
      {
        img: 'assets/images/innlay.jpg',
        town: 'Innlay',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
      {
        img: 'assets/images/ngwesaung.jpg',
        town: 'Ngwe Saung',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
      {
        img: 'assets/images/chaungthar.jpg',
        town: 'Chaung Thar',
        properties: 2345,
        route: '/hotel',
        isLike: 'false',
      },
    ];

    const hotels = [
      {
        mainPic: 'assets/images/Lotte3.jpg',
        sidepics: [
          'assets/images/lotteint7.jpg',
          'assets/images/lotteint6.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Lotte Hotel',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'Free wifi', 'Breakfast', '+9'],
        review: 156,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/novotel2.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Novotel Hotel',
        location: 'Hlaing township, Yangon',
        facilities: ['Paking', 'Free wifi', 'Fitness', '+9'],
        review: 159,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/superhotel.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Super Hotel Thilawa',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'Free wifi', 'Breakfast', '+9'],
        review: 155,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/pana.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Pan Pacific Hotel',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'Free wifi', 'Breakfast', '+9'],
        review: 167,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/inyalake2.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Inya Lake Hotel',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'Free wifi', 'Breakfast', '+9'],
        review: 166,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/parami.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Hotel Parami',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'wifi', 'Breakfast', '+9'],
        review: 161,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/mercure.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Mecure Yagaon Kabar Aye',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'Wifi', 'Breakfast', '+9'],
        review: 241,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/parkroyal.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Park Royal Hotel',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'Free wifi', 'Breakfast', '+9'],
        review: 115,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/skyview.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Sky View Hotel',
        location: 'Hlaing township, Yangon',
        facilities: ['Parking', 'Free wifi', 'Swimming Pool', '+9'],
        review: 251,
        price: 156,
        city: {
          town: 'Yangon',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },

      {
        mainPic: 'assets/images/vintage.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Vintage Luxury Yacht Hotel',
        location: 'sanchaung township, Kalaw',
        facilities: ['Paking', 'Free wifi', 'Breakfast', '+9'],
        review: 653,
        price: 156,
        city: {
          town: 'Kalaw',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/skyview.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Sky Place Hotel Bagan',
        location: 'Nyaung U, Mandalay',
        facilities: ['Parking', 'Free wifi', 'Swimming Pool', '+9'],
        review: 165,
        price: 156,
        city: {
          town: 'Mandalay',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/skyview.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Sky Place Hotel Bagan',
        location: 'Nyaung U, Bagan',
        facilities: ['Parking', 'Free wifi', 'Swimming Pool', '+9'],
        review: 165,
        price: 156,
        city: {
          town: 'Bagan',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
      {
        mainPic: 'assets/images/skyview.jpg',
        sidepics: [
          'assets/images/lotteint2.jpg',
          'assets/images/lotteint3.jpg',
          'assets/images/lotteint4.jpg',
        ],
        title: 'Hotel Temple View Bagan',
        location: 'Nyaung U, Bagan',
        facilities: ['Parking', 'Free wifi', 'Swimming Pool', '+9'],
        review: 265,
        price: 156,
        city: {
          town: 'Bagan',
          properties: 54,
          img: 'assets/images/ngwesaung.jpg',
          isLike: false,
        }
      },
    ];
    return { cities, hotels };
  }

  constructor() {}
}
