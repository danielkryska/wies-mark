import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICategoryTree } from '@shared/models/category.model';
import { hasChildren } from '@shared/utils/categories.util';
import { CategoriesService } from '@shared/services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html'
})
export class CategoriesListComponent {
  @Input() actualTree: ICategoryTree;
  @Input() filterContain: string;
  @Input() exclude: ICategoryTree[] = [];

  @Output() actualTreeChange: EventEmitter<ICategoryTree> = new EventEmitter<ICategoryTree>();
  @Output() selectLeaf: EventEmitter<ICategoryTree> = new EventEmitter<ICategoryTree>();

  get categoriesTrees(): ICategoryTree[] {
    const actualCategoryChildren = !!this.actualTree && this.actualTree.children;
    const topLevelCategories = this._categoriesService.categoriesTrees;
    const categoriesToDisplay = actualCategoryChildren || topLevelCategories;

    return categoriesToDisplay.filter(
      tree =>
        this.filterContain === '' ||
        tree.label.toLowerCase().indexOf(this.filterContain.toLowerCase()) > -1
    );
  }

  protected _children: ICategoryTree[] = [];

  constructor(private _categoriesService: CategoriesService) {}

  chooseChild(category: ICategoryTree) {
    if (!hasChildren(category)) {
      this.selectLeaf.emit(category);
      return;
    }

    this.actualTree = category;
    this.actualTreeChange.emit(this.actualTree);
  }
}
