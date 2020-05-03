import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISortType } from '@shared/models/sort-type.model';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class SortTypesService {

  constructor(private _http: HttpClient) {}

  get sortTypes$(): Observable<ISortType[]> {
    return this._http.get<ISortType[]>(`${environment.API_URL}/sortTypes`);
  }
}
