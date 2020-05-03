import { CategoriesService } from '@shared/services/categories.service';
import { ICategory } from './../shared/models/category.model';
import { SortByComponent } from './sort-by/sort-by.component';
import { FiltersComponent } from './filters/filters.component';
import { Component, OnDestroy } from '@angular/core';
import { ProductsService } from '@shared/services/products.service';
import { ModalController } from '@ionic/angular';
import { IMarketProduct } from '@shared/models/product.model';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  public isGrid = true;
  public marketProducts: IMarketProduct[];

  public actualCategory: ICategory;

  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService,
    private _modalController: ModalController,
    private _activatedRoute: ActivatedRoute
  ) {
    this._productsService.products$
      .pipe(untilDestroyed(this))
      .subscribe((marketProducts: IMarketProduct[]) => {
        this.marketProducts = marketProducts;
      });

    this._activatedRoute.queryParamMap
      .subscribe(async (params) => {
        const categoryValue = params.get('selectedCategory');
        if (!!categoryValue) {
          this.actualCategory = await this._categoriesService.findParentCategoryBy(categoryValue);
        }

        console.log(categoryValue, this.actualCategory);
      });
  }

  async openFilters(): Promise<void> {
    const modal = await this._modalController.create({
      component: FiltersComponent
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
