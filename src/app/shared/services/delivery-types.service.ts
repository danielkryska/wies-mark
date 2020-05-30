import { map } from 'rxjs/operators';
import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ISuppliersDeliveryTypes {
  [supplierName: string]: IDeliveryType;
}

export interface IDeliveryType {
  label: string;
  value: string;
  price: number;
  currency: string;
}

@Injectable({ providedIn: 'root' })
export class DeliveryTypesService {
  public suppliersDeliveryTypes: ISuppliersDeliveryTypes = {};

  constructor(private _http: HttpClient) {}

  deliveryTypesBy$(supplierName: string) {
    return this._http.get<IDeliveryType[]>(`${environment.API_URL}`).pipe(map((data: any) => data.deliveryTypes));
  }
}
