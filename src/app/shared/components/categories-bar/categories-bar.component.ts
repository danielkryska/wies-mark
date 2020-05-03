import { CategoriesService } from './../../services/categories.service';
import { ICategory } from '@shared/models/category.model';
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
  @Input() categories: ICategory[] = [];

  @Output() selectedCategory: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  constructor(private _modalController: ModalController) {}

  async openCategories(): Promise<void> {
    const modal = await this._modalController.create({
      component: CategoriesComponent,
      componentProps: {
        categories: this.categories
      }
    });
    return await modal.present();
  }
}
