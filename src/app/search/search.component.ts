import { ICategoryTree } from './../shared/models/category.model';
import { SearchService } from '../shared/services/search.service';
import { CategoriesComponent } from '@shared/components/categories/categories.component';
import { DEFAULT_SORT_TYPE, ISortTypeValue } from './../shared/models/sort-type.model';
import { CategoriesService } from '@shared/services/categories.service';
import { ICategory } from '@shared/models/category.model';
import { SortByComponent } from './sort-by/sort-by.component';
import { FiltersComponent } from './filters/filters.component';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSearchbar } from '@ionic/angular';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from '@shared/models/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('searchbar') searchbar: IonSearchbar;

  public products: IProduct[];

  public parentCategoryTree: ICategoryTree;
  public actualCategoryTree: ICategoryTree = {ID: '', label: 'test', value: 'test'};

  public proposedCategories: ICategory[] = [];

  constructor(
    private _searchService: SearchService,
    private _categoriesService: CategoriesService,
    private _modalController: ModalController,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._searchService.products$
      .pipe(untilDestroyed(this))
      .subscribe((products: IProduct[]) => this.products = products);

    // TODO queryParams to params /:filters/:sortType
    this._activatedRoute.paramMap
      .pipe(untilDestroyed(this))
      .subscribe((params) => {
        this._updateFiltersBy(params);
        this._updateSortTypeBy(params);
      });
  }

  get categoriesTrees(): ICategoryTree[] {
    return this._categoriesService.categoriesTrees;
  }

  searchForCategory(searchValue: string): void {
    const isEmptyValue = !searchValue || searchValue.trim() === '';
    isEmptyValue
      ? this.clearProposedCategories()
      : this.proposedCategories = this._categoriesService.getCategoriesBy(searchValue);
  }

  ionViewDidEnter = () => setTimeout(() => {
    if (this.searchbar) {
      this.searchbar.setFocus();
    }
  });
  clearProposedCategories = () => this.proposedCategories = [];

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
        actualCategoryTree: this.parentCategoryTree,
        categories: this.categoriesTrees
      }
    });
    return await modal.present();
  }

  async openSortBy(): Promise<void> {
    const modal = await this._modalController.create({
      component: SortByComponent
    });

    modal.onDidDismiss()
      .then(data => !!data.data ? this._searchService.sortType = data.data : null);

    return await modal.present();
  }

  ngOnDestroy() {}

  protected _updateSortTypeBy(params: ParamMap) {
    const sortType: ISortTypeValue | null = !!params.get('sortType')
      ? params.get('sortType') as ISortTypeValue
      : DEFAULT_SORT_TYPE;
    this._searchService.sortType = sortType;
  }

  protected _updateFiltersBy(params: ParamMap) {
    const filters: Partial<IProduct> = !!params.get('filters')
      ? JSON.parse(params.get('filters'))
      : {};
    this._searchService.filters = filters;

    if (filters.category) {
      this._updateCategoryBy(filters.category);
    }
  }

  protected _updateCategoryBy(categoryValue: string) {
    const parentCategoryTree = this._categoriesService.findParentCategoryTreeBy(categoryValue);
    const categoryTree = this._categoriesService.findCategoryTreeBy(categoryValue);
    const rootCategory = null;
    this.parentCategoryTree = !!parentCategoryTree ? parentCategoryTree : categoryTree;
    this.actualCategoryTree = !!parentCategoryTree ? categoryTree : rootCategory;
  }
}
