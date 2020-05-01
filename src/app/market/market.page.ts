import { ProductsFiltersComponent } from './products-filters/products-filters.component';
import { IMarketProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';
import { ModalController } from '@ionic/angular';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-market',
  templateUrl: 'market.page.html',
  styleUrls: ['market.page.scss']
})
export class MarketPage implements OnDestroy {
  public isGrid: boolean = true;
  public marketProducts: IMarketProduct[];

  private _productsSubscription: Subscription;

  constructor(
    private _productsService: ProductsService,
    public _modalController: ModalController
  ) {
    this._productsSubscription = this._productsService.products$
      .pipe(untilDestroyed(this))
      .subscribe((marketProducts: IMarketProduct[]) => {
        this.marketProducts = marketProducts;
      });
  }

  public sortProductsBy = (e): void => this._productsService.sortType = e.target.value;

  async openFilters(): Promise<void> {
    const modal = await this._modalController.create({
      component: ProductsFiltersComponent
    });
    return await modal.present();
  }

  async openCategories(): Promise<void> {

  }

  async openSortBy(): Promise<void> {

  }

  ngOnDestroy() {}
}
