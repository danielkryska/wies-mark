import { CategoriesService } from '@shared/services/categories.service';
import { ICategoryTree } from '@shared/models/category.model';
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesComponent } from '@shared/components/categories/categories.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-categories-bar',
  templateUrl: './categories-bar.component.html',
  styleUrls: ['./categories-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesBarComponent {
  constructor(
    private _categoriesService: CategoriesService,
    private _modalController: ModalController
  ) {}

  get categoriesTrees(): ICategoryTree[] {
    return this._categoriesService.categoriesTrees;
  }

  async openCategories(): Promise<void> {
    const modal = await this._modalController.create({
      component: CategoriesComponent
    });

    return await modal.present();
  }
}
