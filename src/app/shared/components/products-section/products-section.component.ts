import { IMarketProduct } from '@shared/models/product.model';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss']
})
export class ProductsSectionComponent {
  @Input() title: string;

  // IMPORTANT!! Somehow fetching data from service don't propagate changes
  // in view, if you found solution, just encapsulate this component to fetch
  // it's data by it self and remove this input
  @Input() products: IMarketProduct[] = [];

  @Input() sortBy: string;
  @Input() filters: any[] = [];
}
