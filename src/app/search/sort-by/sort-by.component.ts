import { untilDestroyed } from 'ngx-take-until-destroy';
import { SortTypesService } from '@shared/services/sort-types.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { ISortType } from '@shared/models/sort-type.model';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnDestroy {
  public sortTypes: ISortType[] = [];

  constructor(
    private _productsService: ProductsService,
    private _sortTypesService: SortTypesService,
    private _modalController: ModalController
  ) {
    this._sortTypesService.sortTypes$
      .pipe(untilDestroyed(this))
      .subscribe((sortTypes: ISortType[]) => this.sortTypes = sortTypes);
  }

  chooseSortType(value: string) {
    this._productsService.sortType = value;
    this.closeSelf();
  }
  closeSelf = () => this._modalController.dismiss({dismissed: true});

  ngOnDestroy() {}
}
