import { RegionsHelper } from './../introdution-slides/introdution-slides.page';
import { Component } from '@angular/core';
import { ICity } from '../introdution-slides/introdution-slides.page';

export interface IPhoto {
  // TODO Photos metadata
  url: string;
}

export interface ICategory {
  // meta
  _parentPath: string;

  // data
  name: string;
}

export interface IUser {
  id: string;
  nick: string;
  name: string;
  forename: string;
  postCode: string;
  city: ICity;
  email: string;
  phone: number;
}

export interface ISupplier extends IUser {
  productsCategories: ICategory[];
  averageOfRates: number;
  // TODO upgrade supplier
}

export interface IOpinion {
  user: Partial<IUser>;
  rate: number;
  creationDate: Date;
  updateDate: Date;
}

export interface IProduct {
  title: string;
  price: number;
  currency: string;
  unit: string;
  category: ICategory;
  photos: IPhoto[];
  isFavorite: boolean; // For this specific user
  description: string;
  location: ICity;
  supplier: ISupplier;
  composition?: ICategory[];
  storageMethods?: any[];
  opinions?: IOpinion[];
  inBasket?: boolean;
  // TODO Storage methods
}

@Component({
  selector: 'app-market',
  templateUrl: 'market.page.html',
  styleUrls: ['market.page.scss']
})
export class MarketPage {
  public isGrid = true;
  public products: IProduct[] = [
    {
      title: 'Jajca',
      price: 3.60,
      unit: 'szt',
      currency: 'PLN',
      category: {
        _parentPath: 'test/elo',
        name: 'jajca'
      },
      photos: [
        {url: '../../assets/introdution-slides-bg-1.jpg'},
        {url: '../../assets/introdution-slides-bg-1.jpg'}
      ],
      isFavorite: true,
      description: "jajca, jajca jak szalone",
      location: RegionsHelper.CITIES[0],
      supplier: {
        id: 'dadadadawdad',
        nick: 'Twoja stara',
        name: 'Jasiu',
        forename: 'Kowalski',
        postCode: '32-890',
        city: RegionsHelper.CITIES[0],
        email: 'jasiu.jasiu@test.pl',
        phone: 540908675,
        productsCategories: [
          {
            _parentPath: '',
            name: 'jajca'
          },
          {
            _parentPath: 'mieso',
            name: 'indyk'
          }
        ],
        averageOfRates: 4.87
      }
    },
    {
      title: 'Jajca',
      price: 3.60,
      unit: 'szt',
      currency: 'PLN',
      category: {
        _parentPath: 'test/elo',
        name: 'jajca'
      },
      photos: [
        {url: '../../assets/introdution-slides-bg-1.jpg'},
        {url: '../../assets/introdution-slides-bg-1.jpg'}
      ],
      isFavorite: false,
      description: "jajca, jajca jak szalone",
      location: RegionsHelper.CITIES[0],
      supplier: {
        id: 'dadadadawdad',
        nick: 'Twoja stara',
        name: 'Jasiu',
        forename: 'Kowalski',
        postCode: '32-890',
        city: RegionsHelper.CITIES[0],
        email: 'jasiu.jasiu@test.pl',
        phone: 540908675,
        productsCategories: [
          {
            _parentPath: '',
            name: 'jajca'
          },
          {
            _parentPath: 'mieso',
            name: 'indyk'
          }
        ],
        averageOfRates: 4.87
      }
    },
    {
      title: 'Jajca',
      price: 3.60,
      currency: 'PLN',
      unit: 'szt',
      category: {
        _parentPath: 'test/elo',
        name: 'jajca'
      },
      photos: [
        {url: '../../assets/introdution-slides-bg-1.jpg'},
        {url: '../../assets/introdution-slides-bg-1.jpg'}
      ],
      isFavorite: true,
      description: "jajca, jajca jak szalone",
      location: RegionsHelper.CITIES[0],
      supplier: {
        id: 'dadadadawdad',
        nick: 'Twoja stara',
        name: 'Jasiu',
        forename: 'Kowalski',
        postCode: '32-890',
        city: RegionsHelper.CITIES[0],
        email: 'jasiu.jasiu@test.pl',
        phone: 540908675,
        productsCategories: [
          {
            _parentPath: '',
            name: 'jajca'
          },
          {
            _parentPath: 'mieso',
            name: 'indyk'
          }
        ],
        averageOfRates: 4.87
      }
    }
  ];
}
