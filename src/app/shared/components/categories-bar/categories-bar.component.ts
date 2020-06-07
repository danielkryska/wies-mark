import { Router } from '@angular/router';
import { SearchService } from '@shared/services/search.service';
import { CategoriesService } from '@shared/services/categories.service';
import { ICategoryTree } from '@shared/models/category.model';
import { Component } from '@angular/core';
import { CategoriesModalComponent } from '@shared/components/categories-modal/categories-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html'
})
export class CategoriesBarComponent {
  constructor(
    private _categoriesService: CategoriesService,
    private _modalController: ModalController,
    private _searchService: SearchService,
    private _router: Router
  ) {}

  get categoriesTrees(): ICategoryTree[] {
    return this._categoriesService.categoriesTrees;
  }

  searchIn(categoryTree) {
    this._searchService.filters = {
      category: categoryTree
    };
    this._router.navigateByUrl('zakladki/szukaj');
  }
}
