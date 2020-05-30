import { SearchService } from '../../shared/services/search.service';
import { Component } from '@angular/core';
import { IProduct } from '@shared/models/product.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  public filters: Partial<IProduct> = {};

  constructor(private _searchService: SearchService, private _modalController: ModalController) {}

  applyFilters = () => {};
  closeSelf = () => this._modalController.dismiss({ dismissed: true });
}
