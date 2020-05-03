import { map, reduce } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '@shared/models/category.model';
import { environment } from '@environment';

import * as _ from 'lodash';

export const findParentRecursively = (categories: ICategory[], categoryValue: string) => {
  const nodesCategories = categories.filter((category: ICategory) => !!category && !category.isLeaf);
  const parent = categories.find((category: ICategory) => isParent(category, categoryValue));
  return !!parent
    ? parent
    : findParentRecursively(
      nodesCategories
        .map((category: ICategory) => category.children)
        .reduce((accumulator, categories) => accumulator = [...accumulator, ...categories], []),
      categoryValue
    );
}

const isParent = (category: ICategory, categoryValue: string) => !!category && (
  category.value === categoryValue
  || (
    !category.isLeaf
    && category.children.some((childCategory: ICategory) => childCategory.value === categoryValue)
  )
);

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private _http: HttpClient) {}

  get categories$(): Observable<ICategory[]> {
    return this._http
      .get<ICategory[]>(`${environment.API_URL}/categories`);
  }

  findParentCategoryBy = (categoryValue: string): Promise<ICategory | null> => this.categories$
    .pipe(
      map((categories) => {
        const parent = findParentRecursively(categories, categoryValue);
        if (!parent) {
          // TODO Global error handling
          throw new Error(`Parent couldn't be found, value: ${categoryValue}`);
        }

        return parent;
      })
    )
    .toPromise()
}
