import { SortTypesService } from '@shared/services/sort-types.service';
import { Component, OnInit } from '@angular/core';
import { ISortTypeGroup } from '@shared/models/sort-type.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss']
})
export class SortByComponent implements OnInit {
  public sortTypes: ISortTypeGroup[] = [];

  constructor(
    private _sortTypesService: SortTypesService,
    private _modalController: ModalController
  ) {}

  ngOnInit() {
    this.sortTypes = this._sortTypesService.sortTypes;
  }

  closeSelf = (data = null) => this._modalController.dismiss(data);
}
