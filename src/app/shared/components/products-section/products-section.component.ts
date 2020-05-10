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
}
