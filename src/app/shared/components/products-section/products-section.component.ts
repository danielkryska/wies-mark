import { BasketService } from '../../services/basket.service';
import { IProduct } from '@shared/models/product.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss']
})
export class ProductsSectionComponent {
  @Input() title: string;
  @Input() products: IProduct[] = [];

  constructor(
    private _basketService: BasketService,
    // private _favoritesService: FavoritesService
  ) {}

  toggleInBasket = (product: IProduct) =>  product.inBasket
    ? this._basketService.remove(product)
    : this._basketService.add(product)
}
