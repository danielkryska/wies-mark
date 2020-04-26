import { Component } from '@angular/core';
import * as regionsJSON from '../../assets/poland-cities.json';
import { Storage } from '@ionic/storage';

import * as _ from 'lodash';
import { Router } from '@angular/router';

export const USER_LOCATION_FIELD = 'userLocation';
export interface ICity {
  id: number;
  name: string;
  fullName: string;
  county: string;
  region: string;
  lon: number;
  lat: number;
  zoom: number;
  url: string;
  districts: any[];
}

export interface IRegion {
  name: string;
  cities: ICity[];
}

export class RegionsHelper {
  public static REGIONS: IRegion[] = regionsJSON['default']
    .map((region: IRegion) => ({
      name: region.name,
      cities: region.cities
        .map((city: any) => ({
          id: city.id,
          name: city.text_simple,
          fullName: city.text,
          county: city.text_gray,
          region: region.name,
          lon: city.lon,
          lat: city.lat,
          zoom: city.zoom,
          url: city.url,
          districts: city.districts
        }))
    }));
  public static CITIES: ICity[] = RegionsHelper.REGIONS
    .map((region: IRegion) => region.cities)
    .reduce((accumulator: ICity[], regionCities: ICity[]) => accumulator = [...accumulator, ...regionCities], []);
}

@Component({
  selector: 'app-introdution-slides',
  templateUrl: './introdution-slides.page.html',
  styleUrls: ['./introdution-slides.page.scss'],
})
export class IntrodutionSlidesPage {
  public slideOpts = {speed: 400};
  public searchedCities: ICity[] = [];

  constructor(
    private _storage: Storage,
    private _router: Router
  ) {
    this._storage.get(USER_LOCATION_FIELD)
      .then((userLocationValue: string | null) => {
        if (!!userLocationValue) {
          this._router.navigateByUrl('/zakladki/jarmark');
        }
      });
  }

  searchForCity(input: any): void {
    const searchValue: string = input.target.value;
    if (!searchValue || searchValue.trim() === '') {
      this.clearProposedCities();
      return;
    }

    this.searchedCities = RegionsHelper.CITIES
      .filter((city: ICity) => city.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
      .slice(0, 3);
  }

  clearProposedCities = (): void => this.searchedCities = [] as undefined;

  chooseCity(city: ICity) {
    this._storage.set(USER_LOCATION_FIELD, JSON.stringify(city));
    console.log(city);
    this._router.navigateByUrl('/zakladki/jarmark');
  }
}

