import { ProductsService } from '@shared/services/products.service';
import { ISortTypeValue, DEFAULT_SORT_TYPE } from '@shared/models/sort-type.model';
import { Injectable } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public products$: Observable<IProduct[]>;

  private _filters: Partial<IProduct> = {};
  private _sortType: ISortTypeValue = DEFAULT_SORT_TYPE;

  private _productsSubject$: BehaviorSubject<IProduct[]>;

  constructor(private _productsService: ProductsService) {
    this._productsSubject$ = new BehaviorSubject<IProduct[]>([]);
    this.products$ = this._productsSubject$.asObservable();
  }

  set sortType(sortType: ISortTypeValue) {
    this._sortType = sortType;
    this._productsService.getBy$(this._filters, this._sortType)
      .subscribe((products: IProduct[]) => this._productsSubject$.next(products));
  }

  set filters(filters: Partial<IProduct>) {
    this._filters = filters;
    this._productsService.getBy$(this._filters, this._sortType)
      .subscribe((products: IProduct[]) => this._productsSubject$.next(products));
  }

  countBy$ = (filters: Partial<IProduct>): Observable<number> => this._productsService.countBy$(filters);
}
