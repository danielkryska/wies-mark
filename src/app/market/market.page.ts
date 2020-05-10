import { IProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';
import { ModalController } from '@ionic/angular';
import { Component, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-market',
  templateUrl: 'market.page.html',
  styleUrls: ['market.page.scss']
})
export class MarketPage implements OnDestroy {
  public products: IProduct[] = [];

  constructor(
    private _productsService: ProductsService,
    public _modalController: ModalController
  ) {
    this._productsService.products$
      .pipe(untilDestroyed(this))
      .subscribe((products: IProduct[]) => this.products = products);
  }

  ngOnDestroy() {}
}
