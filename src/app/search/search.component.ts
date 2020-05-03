import { DEFAULT_SORT_TYPE } from './../shared/models/sort-type.model';
import { CategoriesService, isBelongingTo } from '@shared/services/categories.service';
import { ICategory } from '@shared/models/category.model';
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

  public actualSortType: string;
  public actualCategory: ICategory;
  public categories: ICategory[] = [];

  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService,
    private _modalController: ModalController,
    private _activatedRoute: ActivatedRoute
  ) {
    this._productsService.getProducts()
      .pipe(untilDestroyed(this))
      .subscribe((marketProducts: IMarketProduct[]) => {
        this.marketProducts = marketProducts;
      });

    this._categoriesService.categories$
      .subscribe((categories: ICategory[]) => this.categories = categories);

    this._activatedRoute.queryParamMap
      .subscribe(async (params) => {
        const categoryValue = params.get('selectedCategory');
        if (!!categoryValue) {
          this.actualCategory = await this._categoriesService.findParentCategoryBy(categoryValue);
          const filterBy = (product: IMarketProduct) => isBelongingTo(product.category, this.actualCategory);
          this._productsService.getProducts([filterBy], DEFAULT_SORT_TYPE)
            .pipe(untilDestroyed(this))
            .subscribe((marketProducts: IMarketProduct[]) => {
              this.marketProducts = marketProducts;
            });
        }
      });
  }

  // searchForCity(input: any): void {
  //   const searchValue: string = input.target.value;
  //   !!searchValue && searchValue.trim() !== ''
  //     ? this._citiesService.getCitiesBy(searchValue)
  //         .then((cities) => this.searchedCities = cities.slice(0, 3))
  //     : this.clearProposedCities();
  // }

  // clearProposedCities = (): void => this.searchedCities = [] as undefined;

  // chooseCategory(category: ICategory) {
  //   this.actualCategory = await this._categoriesService.findParentCategoryBy(categoryValue);
  //   const filterBy = (product: IMarketProduct) => isBelongingTo(product.category, this.actualCategory);
  //   this._productsService.getProducts([filterBy], DEFAULT_SORT_TYPE)
  //     .pipe(untilDestroyed(this))
  //     .subscribe((marketProducts: IMarketProduct[]) => {
  //       this.marketProducts = marketProducts;
  //     });
  // }

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

    modal.onDidDismiss()
      .then((data) => {
        this.actualSortType = data.data;
        const filterBy = (product: IMarketProduct) => isBelongingTo(product.category, this.actualCategory);
        this._productsService.getProducts(!!this.actualCategory ? [filterBy] : [], this.actualSortType)
          .pipe(untilDestroyed(this))
          .subscribe((marketProducts: IMarketProduct[]) => {
            this.marketProducts = marketProducts;
          });
      });

    return await modal.present();
  }

  ngOnDestroy() {}
}
