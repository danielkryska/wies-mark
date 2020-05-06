import { ICategory } from '@shared/models/category.model';
import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { findParentRecursively } from '@shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input() actualCategory: ICategory;
  @Input() categories: ICategory[] = [];

  public categoriesToDisplay: ICategory[];

  constructor(
    private _router: Router,
    private _modalController: ModalController
  ) {}

  chooseSubCategory(category: ICategory) {
    if (category.isLeaf || !category.children || category.children.length === 0) {
      this.goToCategory(category);
    }

    this.actualCategory = category;
    this.categoriesToDisplay = category.children;
  }

  chooseParentCategory = (category: ICategory) => {
    const parentCategory = findParentRecursively(this.categories, category.value);
    this.actualCategory = this.actualCategory === parentCategory
      ? null
      : parentCategory;
  }

  goToCategory(category: ICategory) {
    this.closeSelf();
    this._router.navigate(
      ['zakladki/szukaj'],
      {
        queryParams: {
          selectedCategory: category.value
        }
      }
    );
  }

  closeSelf = () => this._modalController.dismiss({dismissed: true});
}
