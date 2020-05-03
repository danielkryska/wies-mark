import { Component, OnInit } from '@angular/core';
import { IMarketProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  public filters: ((product: IMarketProduct) => boolean)[] = [];

  constructor(
    private _productsService: ProductsService,
    private _modalController: ModalController
  ) {}

  applyFilters = () => this._productsService.filters = this.filters;
  closeSelf = () => this._modalController.dismiss({dismissed: true});
}
