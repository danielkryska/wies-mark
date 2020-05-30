import { IProduct } from './../models/product.model';
import { ProductsService } from './products.service';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  public products: IProduct[] = [];

  get favoriteProducts() {
    return this.products.filter((product) => product.isFavorite);
  }

  constructor(private _productsService: ProductsService) {
    this._productsService.getBy$({ isFavorite: true }).subscribe((products) => (this.products = products));
  }

  add(product: IProduct) {
    const productInFavorites = this.products.some((favoriteProduct) => _.isEqual(favoriteProduct, product));
    if (!productInFavorites) {
      this.products.unshift(product);
    }
    product.isFavorite = true;
  }

  remove(product: IProduct) {
    this.products.find((favoriteProduct) => _.isEqual(favoriteProduct, product)).isFavorite = false;
    product.isFavorite = false;
  }

  removeOutOfFavorites() {
    _.remove(this.products, (product) => !product.isFavorite);
  }
}
