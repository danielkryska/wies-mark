import { environment } from '@environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IDeliveryType {
  label: string;
  value: string;
  price: number;
  currency: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeliveryTypesService {
  constructor(private _http: HttpClient) {}

  getDeliveryTypesBy(supplierName: string) {
    return this._http.get<IDeliveryType[]>(`${environment.API_URL}/deliveryTypes`);
  }
}
