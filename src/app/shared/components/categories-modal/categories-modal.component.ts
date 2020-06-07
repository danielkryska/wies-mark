import { SearchService } from '@shared/services/search.service';
import { ICategoryTree } from '../../models/category.model';
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories-modal.component.html'
})
export class CategoriesModalComponent {
  @Input() actualCategoryTree: ICategoryTree;

  constructor(
    private _router: Router,
    private _modalController: ModalController,
    private _searchService: SearchService
  ) {}

  goTo(category: ICategoryTree) {
    this.closeSelf();
    this._searchService.filters = { category };
    this._router.navigateByUrl('zakladki/szukaj');
  }

  closeSelf = () => this._modalController.dismiss({ dismissed: true });
}
