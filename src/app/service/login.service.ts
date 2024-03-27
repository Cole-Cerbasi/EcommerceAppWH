import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:4200/api/login';
  constructor(private http: HttpClient) {}
  postData(data: any): Observable<any> {
    console.log("Login called");
    return this.http.post<any>(this.apiUrl, data);
  }
}
