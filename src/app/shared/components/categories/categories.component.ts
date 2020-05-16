import { ICategoryTree } from './../../models/category.model';
import { hasChildren } from './../../utils/categories.util';
import { ICategory } from '@shared/models/category.model';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CategoriesService } from '@shared/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  @Input() actualCategoryTree: ICategoryTree;
  public categoriesToDisplay: ICategory[];

  constructor(
    private _categoriesService: CategoriesService,
    private _router: Router,
    private _modalController: ModalController
  ) {}

  get categoriesTrees(): ICategoryTree[] {
    return this._categoriesService.categoriesTrees;
  }

  chooseChild(category: ICategoryTree) {
    if (!hasChildren(category)) {
      this.goTo(category);
      return false;
    }

    this.actualCategoryTree = category;
    this.categoriesToDisplay = category.children;
  }

  chooseParent(category: ICategoryTree) {
    const parentCategory = this._categoriesService.findParentCategoryTreeBy(category.value);
    const isTreeRoot = this.actualCategoryTree === parentCategory;
    this.actualCategoryTree = isTreeRoot ? null : parentCategory;
  }

  goTo(category: ICategoryTree) {
    this.closeSelf();
    // TODO Add filters to filters service
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
