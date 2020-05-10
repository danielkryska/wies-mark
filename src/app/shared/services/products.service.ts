import { IProduct } from './../models/product.model';
import { DEFAULT_SORT_TYPE } from './../models/sort-type.model';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  get products$(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(`${environment.API_URL}/products`);
  }

  // TODO add items per page and max limit of returning products
  public getBy$ = (
    filters: Partial<IProduct>,
    sortType: string = DEFAULT_SORT_TYPE
  ): Observable<IProduct[]> => this.products$

  // TODO Replace mock
  public countBy$ = (filters: Partial<IProduct>): Observable<number> => of(5);
}
