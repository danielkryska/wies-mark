import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICity } from '@shared/models/city.model';
import { environment } from '@environment';

@Injectable({ providedIn: 'root' })
export class CitiesService {
  constructor(private _http: HttpClient) {}

  searchCitiesBy = (cityPartialName: string): Observable<ICity[]> =>
    this._http.get<ICity[]>(`${environment.API_URL}`).pipe((data: any) => data.cities);
}
