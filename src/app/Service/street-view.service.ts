import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreetViewService {

  constructor(private http: HttpClient) { }
  getStreetViews(): Observable<[]>{
    return this.http.get<[]>('assets/street-view.json');
  }
}
