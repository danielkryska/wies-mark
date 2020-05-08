import { IMarketProduct } from '@shared/models/product.model';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss']
})
export class ProductsSectionComponent {
  @Input() title: string;
  @Input() products: IMarketProduct[] = [];

  @Input() isChecklist: boolean;
}
