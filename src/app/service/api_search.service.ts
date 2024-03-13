import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APISearchService {
  private apiUrl = 'http://localhost:4200/api/product';
  constructor(private http: HttpClient) {}
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
