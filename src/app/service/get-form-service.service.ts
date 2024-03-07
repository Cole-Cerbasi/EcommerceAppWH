import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GETFormServiceService {
  private apiUrl = 'http://localhost:4200/api/signup';
  constructor(private http: HttpClient) {}
  postData(data: any): Observable<any> {
    console.log("collected & sent");
    console.log(data);
    return this.http.post<any>(this.apiUrl, data);
  }
}
