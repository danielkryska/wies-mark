import { untilDestroyed } from 'ngx-take-until-destroy';
import { SortTypesService } from '@shared/services/sort-types.service';
import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
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
    private _sortTypesService: SortTypesService,
    private _modalController: ModalController
  ) {
    this._sortTypesService.sortTypes$
      .pipe(untilDestroyed(this))
      .subscribe((sortTypes: ISortType[]) => this.sortTypes = sortTypes);
  }

  closeSelf = (data = null) => this._modalController.dismiss(data);

  ngOnDestroy() {}
}
