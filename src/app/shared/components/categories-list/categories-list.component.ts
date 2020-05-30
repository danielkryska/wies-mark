import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICategoryTree } from '@shared/models/category.model';
import { hasChildren } from '@shared/utils/categories.util';
import { CategoriesService } from '@shared/services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent {
  @Input() actualCategoryTree: ICategoryTree;
  @Input() maxInput = 0;

  @Output() actualCategoryTreeChange: EventEmitter<ICategoryTree> = new EventEmitter<ICategoryTree>();
  @Output() selectCategoryLeaf: EventEmitter<ICategoryTree> = new EventEmitter<ICategoryTree>();

  get categoriesTrees(): ICategoryTree[] {
    const actualCategoryChildren = !!this.actualCategoryTree && this.actualCategoryTree.children;
    const topLevelCategories = this._categoriesService.categoriesTrees;
    const categoriesToDisplay = actualCategoryChildren || topLevelCategories;

    return this.maxInput > 0 ? categoriesToDisplay.splice(0, this.maxInput) : categoriesToDisplay;
  }

  protected _children: ICategoryTree[] = [];

  constructor(private _categoriesService: CategoriesService) {}

  chooseChild(category: ICategoryTree) {
    if (!hasChildren(category)) {
      this.selectCategoryLeaf.emit(category);
      return;
    }

    this.actualCategoryTree = category;
    this.actualCategoryTreeChange.emit(this.actualCategoryTree);
  }
}
