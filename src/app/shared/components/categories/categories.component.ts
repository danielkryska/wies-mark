import { ICategory } from '@shared/models/category.model';
import { Component, OnDestroy, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  @Input() categories: ICategory[] = [];
  @Input() maxToDisplay: number;

  public categoriesToDisplay: ICategory[];

  public actualCategory: ICategory;

  constructor(
    private _router: Router,
    private _modalController: ModalController
  ) {}

  ngOnInit() {
    this.categoriesToDisplay = !!this.maxToDisplay
      ? this.categories.splice(0, this.maxToDisplay)
      : this.categories;
  }

  chooseCategory(category: ICategory) {
    if (category.isLeaf || !category.children || category.children.length === 0) {
      this.searchCategory(category);
    }

    this.actualCategory = category;
    this.categoriesToDisplay = category.children;
  }

  searchCategory = (category: ICategory) => {
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

  // TODO Return to show more/less after ionic-angular ng zone fix
  showMore = () => this.categoriesToDisplay = this.categories;
  showLess = () => this.categoriesToDisplay = this.categoriesToDisplay = this.categories.splice(0, this.maxToDisplay);
  closeSelf = () => this._modalController.dismiss({dismissed: true});

  ngOnDestroy() {}
}
