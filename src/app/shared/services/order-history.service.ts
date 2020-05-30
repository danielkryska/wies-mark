import { ProductsService } from './products.service';
import { IProduct } from '@shared/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderHistoryService {
  public products: IProduct[] = [];

  // TODO Archive service
  constructor(private _productsService: ProductsService) {
    // TODO filter { orderDate: 'exists' }
    this._productsService.getBy$({ isEco: true }).subscribe((products) => (this.products = products));
  }

  add(...products: IProduct[]) {
    this.products.push(...products);
  }
}
