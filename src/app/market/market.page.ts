import { SearchService } from '@shared/services/search.service';
import { Router } from '@angular/router';
import { IProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';
import { Component, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-market',
  templateUrl: 'market.page.html',
  styleUrls: ['market.page.scss']
})
export class MarketPage implements OnDestroy {
  public products: IProduct[] = [];

  constructor(
    private _productsService: ProductsService,
    private _searchService: SearchService,
    private _router: Router
  ) {
    this._productsService.products$
      .pipe(untilDestroyed(this))
      .subscribe((products: IProduct[]) => (this.products = products));
  }

  searchForProduct() {
    this._searchService.filters = {};
    this._router.navigateByUrl('/zakladki/szukaj');
  }

  ngOnDestroy() {}
}
