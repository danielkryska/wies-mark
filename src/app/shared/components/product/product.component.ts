import { untilDestroyed } from 'ngx-take-until-destroy';
import { IProduct } from '@shared/models/product.model';
import { ProductsService } from '@shared/services/products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit, OnDestroy {
  public product: IProduct | null;

  constructor(
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap
      .pipe(
        untilDestroyed(this),
        switchMap((params: ParamMap) => this._productsService.find$(params.get('ID')))
      )
      .subscribe(product => (this.product = product));
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy() {}
}
