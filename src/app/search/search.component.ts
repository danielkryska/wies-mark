import { CategoriesComponent } from '@shared/components/categories/categories.component';
import { DEFAULT_SORT_TYPE } from './../shared/models/sort-type.model';
import { CategoriesService, isBelongingTo } from '@shared/services/categories.service';
import { ICategory } from '@shared/models/category.model';
import { SortByComponent } from './sort-by/sort-by.component';
import { FiltersComponent } from './filters/filters.component';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '@shared/services/products.service';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { IMarketProduct } from '@shared/models/product.model';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchbar') searchbar: IonSearchbar;
  
  public marketProducts: IMarketProduct[];

  public actualSortType: string;
  public parentCategory: ICategory;
  public actualCategory: ICategory;
  public categories: ICategory[] = [];

  public proposedCategories: ICategory[] =[];
  private _flatCategories: ICategory[] = [];

  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService,
    private _modalController: ModalController,
    private _activatedRoute: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    this._productsService.getProducts()
      .pipe(untilDestroyed(this))
      .subscribe((marketProducts: IMarketProduct[]) => {
        this.marketProducts = marketProducts;
      });

    this._categoriesService.categories$
      .pipe(untilDestroyed(this))
      .subscribe((categories: ICategory[]) => this.categories = categories);

    this._activatedRoute.queryParamMap
      .pipe(untilDestroyed(this))
      .subscribe(async (params) => {
        const categoryValue = params.get('selectedCategory');
        
        if (
          !!categoryValue
          && !!this.actualCategory
          && this.actualCategory.value === categoryValue
          || !categoryValue
        ) {
          this.parentCategory = null;
          this.actualCategory = null;
          return;
        }

        if (!!categoryValue) {
          this.parentCategory = await this._categoriesService.findParentCategoryBy(categoryValue);
          this.actualCategory = await this._categoriesService.findCategoryBy(categoryValue);
          const filterBy = (product: IMarketProduct) => isBelongingTo(product.category, this.actualCategory);
          this._productsService.getProducts([filterBy], DEFAULT_SORT_TYPE)
            .pipe(untilDestroyed(this))
            .subscribe((marketProducts: IMarketProduct[]) => {
              this.marketProducts = marketProducts;
            });

          this._location.replaceState('zakladki/szukaj');
        }
      });

    this._categoriesService.flatCategories$
      .pipe(untilDestroyed(this))
      .subscribe((categories: ICategory[]) => this._flatCategories = categories);
  }

  searchForCategory(input: any): void {
    const searchValue: string = input.target.value;
    !!searchValue && searchValue.trim() !== ''
      ? this.proposedCategories = this._flatCategories
        .filter((category: ICategory) => category.label.toLocaleLowerCase().indexOf(searchValue) > -1)
          .slice(0, 10)
      : this.clearProposedCategories();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.searchbar.setFocus();
    });
  }

  clearProposedCategories = (): void => this.proposedCategories = [] as undefined;

  async openFilters(): Promise<void> {
    const modal = await this._modalController.create({
      component: FiltersComponent
    });
    return await modal.present();
  }

  async openCategories(): Promise<void> {
    const modal = await this._modalController.create({
      component: CategoriesComponent,
      componentProps: {
        actualCategory: this.parentCategory,
        categories: this.categories
      }
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
