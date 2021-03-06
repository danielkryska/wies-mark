import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory, ICategoryTree } from '@shared/models/category.model';
import { environment } from '@environment';
import { flattenCategories, findCategoryInTree, findParentCategoryInTree } from '@shared/utils/categories.util';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  public categoriesTrees: ICategoryTree[] = [];
  public categories: ICategory[] = [];

  constructor(private _http: HttpClient) {
    this.trees$.subscribe((categoriesTrees: ICategoryTree[]) => {
      this.categoriesTrees = categoriesTrees;
      this.categories = flattenCategories(...categoriesTrees);
    });
  }

  public get trees$() {
    return this._http.get<ICategoryTree[]>(`${environment.API_URL}`).pipe(map((data: any) => data.categories));
  }

  getCategoriesBy = (categoryValue: string): ICategory[] | [] =>
    this.categories
      .filter((category: ICategory) => category.label.toLocaleLowerCase().indexOf(categoryValue.toLowerCase()) > -1)
      .slice(0, 10);
  findCategoryTreeBy = (categoryValue: string): ICategoryTree | null =>
    findCategoryInTree(this.categoriesTrees, categoryValue);
  findParentCategoryTreeBy = (categoryValue: string): ICategoryTree | null =>
    findParentCategoryInTree(this.categoriesTrees, categoryValue);
}
