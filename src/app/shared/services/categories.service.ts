import { map, reduce } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '@shared/models/category.model';
import { environment } from '@environment';

import * as _ from 'lodash';

export const isBelongingTo = (source: ICategory, actual: ICategory): boolean => {
  const isBelonging = isSearched(source, actual.value);
  if (!isBelonging && !source.isLeaf && !!source.children) {
    return source.children
      .map((category: ICategory) => isBelongingTo(category, actual))
      .some((isBelonging) => isBelonging);
  }

  return isBelonging;
};

export const findParentRecursively = (categories: ICategory[], categoryValue: string): ICategory => {
  const nodesCategories = categories.filter((category: ICategory) => !!category && !category.isLeaf);
  const parent = categories.find((category: ICategory) => isSearched(category, categoryValue));
  return !!parent
    ? parent
    : findParentRecursively(
      nodesCategories
        .map((category: ICategory) => category.children)
        .reduce((accumulator, categories) => accumulator = [...accumulator, ...categories], []),
      categoryValue
    );
};

export const findCategoryRecursively = (categories: ICategory[], categoryValue: string): ICategory => {
  const searchedCategory = categories.find((category: ICategory) => !!category && category.value === categoryValue);
  return !!searchedCategory
    ? searchedCategory
    : findCategoryRecursively(
      categories
        .map((category: ICategory) => category.children)
        .reduce((accumulator, categories) => accumulator = [...accumulator, ...categories], []),
      categoryValue
    );
}

export const unpackCategories = (categories: ICategory[]) => {
  return categories
    .reduce(
      (acc, category) => {
        acc.push(category);
        if (!category.isLeaf) {
          acc.push(...unpackCategories(category.children));
        }

        return acc;
      },
      []
    );
}

const isSearched = (category: ICategory, categoryValue: string) => !!category && (
  category.value === categoryValue
  || (
    !category.isLeaf
    && !!category.children
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

  get flatCategories$(): Observable<ICategory[]> {
    return this.categories$
      .pipe(
        map((categories: ICategory[]) => unpackCategories(categories))
      );
  }

  findCategoryBy = (categoryValue: string): Promise<ICategory | null> => this.categories$
    .pipe(
      map((categories) => {
        const searchedCategory = findCategoryRecursively(categories, categoryValue);
        if (!searchedCategory) {
          // TODO Global error handling
          throw new Error(`Parent couldn't be found, value: ${categoryValue}`);
        }

        return searchedCategory;
      })
    )
    .toPromise()

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
