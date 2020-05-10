import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

import { ICity } from '@shared/models/city.model';
import { CitiesService } from '@shared/services/cities.service';
import { USER_CITY_FIELD } from '@shared/models/user.model';

@Component({
  selector: 'app-introduction-slides',
  templateUrl: './introduction-slides.page.html',
  styleUrls: ['./introduction-slides.page.scss'],
})
export class IntroductionSlidesPage {
  public searchedCities: ICity[] = [];

  constructor(
    private _storage: Storage,
    private _router: Router,
    private _citiesService: CitiesService
  ) {
    this._redirectOnKnownCity();
  }

  // searchForCity(input: any): void {
  //   const searchValue: string = input.target.value;
  //   !!searchValue && searchValue.trim() !== ''
  //     ? this._citiesService.getCitiesBy(searchValue)
  //         .then((cities) => this.searchedCities = cities.slice(0, 3))
  //     : this.clearProposedCities();
  // }

  // clearProposedCities = (): void => this.searchedCities = [] as undefined;

  // chooseCity(city: ICity) {
  //   this._storage.set(USER_CITY_FIELD, JSON.stringify(city));
  //   this._router.navigateByUrl('/zakladki/jarmark');
  // }

  protected _redirectOnKnownCity = () => this._storage.get(USER_CITY_FIELD)
    .then((userLocationValue: string | null) => {
      if (!!userLocationValue) {
        this._router.navigateByUrl('/zakladki/jarmark');
      }
    })
}

