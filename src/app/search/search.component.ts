import { SortByComponent } from './sort-by/sort-by.component';
import { CategoriesComponent } from './categories/categories.component';
import { FiltersComponent } from './filters/filters.component';
import { Component, OnDestroy } from '@angular/core';
import { ProductsService } from '@shared/services/products.service';
import { ModalController } from '@ionic/angular';
import { IMarketProduct } from '@shared/models/product.model';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  public isGrid = true;
  public marketProducts: IMarketProduct[];

  constructor(
    private _productsService: ProductsService,
    public _modalController: ModalController
  ) {
    this._productsService.products$
      .pipe(untilDestroyed(this))
      .subscribe((marketProducts: IMarketProduct[]) => {
        this.marketProducts = marketProducts;
      });
  }

  async openFilters(): Promise<void> {
    const modal = await this._modalController.create({
      component: FiltersComponent
    });
    return await modal.present();
  }

  async openCategories(): Promise<void> {
    const modal = await this._modalController.create({
      component: CategoriesComponent
    });
    return await modal.present();
  }

  async openSortBy(): Promise<void> {
    const modal = await this._modalController.create({
      component: SortByComponent
    });
    return await modal.present();
  }

  ngOnDestroy() {}
}
