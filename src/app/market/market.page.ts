import { ICategory } from './../shared/models/category.model';
import { IMarketProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';
import { ModalController } from '@ionic/angular';
import { Component, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { CategoriesService } from '@shared/services/categories.service';
import { USER_CITY_FIELD } from '@shared/models/user.model';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-market',
  templateUrl: 'market.page.html',
  styleUrls: ['market.page.scss']
})
export class MarketPage implements OnDestroy {
  public marketProducts: IMarketProduct[] = [];
  public categories: ICategory[] = [];

  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService,
    public _modalController: ModalController
  ) {
    this._productsService.getProducts$()
      .pipe(untilDestroyed(this))
      .subscribe((marketProducts: IMarketProduct[]) => {
        this.marketProducts = marketProducts;
      });

    this._categoriesService.categories$
      .pipe(untilDestroyed(this))
      .subscribe((categories: ICategory[]) => {
        this.categories = categories;
      });
  }

  public sortProductsBy = (e): void => this._productsService.getProducts$([], e.target.value)
    .pipe(untilDestroyed(this))
    .subscribe((marketProducts: IMarketProduct[]) => {
      this.marketProducts = marketProducts;
    }) as undefined;

  ngOnDestroy() {}
}
