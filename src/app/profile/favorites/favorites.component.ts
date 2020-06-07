import { Router } from '@angular/router';
import { FavoritesService } from '@shared/services/favorites.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html'
})
export class FavoritesComponent {
  get products() {
    return this._favoritesService.products;
  }

  constructor(private _favoritesService: FavoritesService, private _router: Router) {
    this._router.events.subscribe(() => {
      if (this._router.url.indexOf('ulubione') > -1) {
        this._favoritesService.removeOutOfFavorites();
      }
    });
  }
}
