import { IMarketProduct } from './../models/product.model';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products$: Observable<IMarketProduct[]>;
  private _productsSubject: BehaviorSubject<IMarketProduct[]>;

  private _filters: ((product: IMarketProduct) => boolean)[] = [];
  private _sortType = 'popularityOfProducts';

  constructor(private _http: HttpClient) {
    this._productsSubject = new BehaviorSubject<IMarketProduct[]>(null);
    this.products$ = this._productsSubject.asObservable();

    this._updateProducts();
  }

  set sortType(sortType: string) {
    if (!!sortType && sortType !== this._sortType) {
      this._sortType = sortType;
      this._updateProducts();
    }
  }

  set filters(filters: ((product: IMarketProduct) => boolean)[]) {
    if (!!filters && filters !== this._filters) {
      this._filters = filters;
      this._updateProducts();
    }
  }

  protected _updateProducts = () => {
    this._getProducts()
      .then((products: IMarketProduct[]) => {
        const filteredProducts = this._filterProducts(products);

        const {iteratees, orders} = this._getSortProperties(this._sortType);
        const orderedFilteredProducts = _.orderBy(filteredProducts, iteratees, orders);
        this._productsSubject.next(orderedFilteredProducts);
      });
  }
  protected _getProducts = (): Promise<IMarketProduct[]> => this._http
    .get<IMarketProduct[]>(`${environment.API_URL}/products`).toPromise()
  protected _filterProducts(products: IMarketProduct[]): IMarketProduct[] {
    let filteredProducts = products;
    this._filters
      .forEach((productFilter: (product: IMarketProduct) => boolean) => {
        filteredProducts = filteredProducts.filter(productFilter);
      });

    return filteredProducts;
  }

  // TODO remove after creation of API endpoint /products
  protected _getSortProperties = (sortType: string) => ({
      popularityOfSuppliers: {
        iteratees: ['averageOfRates', 'opinionsCount'],
        orders: ['desc', 'desc']
      },
      popularityOfProducts: {
        iteratees: ['averageOfRates', 'opinionsCount'],
        orders: ['desc', 'desc']
      },
      priceLowest: {
        iteratees: ['price'],
        orders: ['asc']
      },
      priceHighest: {
        iteratees: ['price'],
        orders: ['desc']
      },
      dateLatest: {
        iteratees: ['creationDate'],
        orders: ['desc']
      },
    })[sortType]
}
