import { SortTypesService } from '@shared/services/sort-types.service';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
})
export class SortByComponent {
  get sortTypes() {
    return this._sortTypesService.sortTypes;
  }

  constructor(private _sortTypesService: SortTypesService, private _modalController: ModalController) {}

  closeSelf = (data = null) => this._modalController.dismiss(data);
}
