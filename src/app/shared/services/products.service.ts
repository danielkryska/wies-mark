import { IProduct } from './../models/product.model';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as _ from 'lodash';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _http: HttpClient) {}

  get products$(): Observable<IProduct[]> {
    return this._http
      .get<IProduct[]>(`${environment.API_URL}`)
      .pipe(map((data: any) => data.products));
  }

  // TODO add items per page and max limit of returning products
  public getBy$ = (filters: Partial<IProduct>, sortType: string = null): Observable<IProduct[]> =>
    this.products$.pipe(
      map((products: IProduct[]) =>
        Object.keys(filters).length > 0 ? _.filter(products, filters) : products
      )
    );

  // TODO to filter service and replace mock
  public countBy$ = (filters: Partial<IProduct>): Observable<number> => of(5);
}
