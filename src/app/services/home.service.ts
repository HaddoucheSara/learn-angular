import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Home } from '../models/home.type';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private apiUrl = 'http://localhost:3000/homes';
  constructor(private http: HttpClient) {}
  getAllHomes(): Observable<Home[]> {
    return this.http.get<Home[]>(this.apiUrl);
  }
}
