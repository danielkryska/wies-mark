import { IMarketProduct } from '@shared/models/product.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductsService } from '@shared/services/products.service';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsFiltersComponent {
  public filters: ((product: IMarketProduct) => boolean)[] = [];

  constructor(
    private _productsService: ProductsService,
    private _modalController: ModalController
  ) {}

  applyFilters = () => this._productsService.filters = this.filters;
  closeSelf = () => this._modalController.dismiss({dismissed: true});
}
