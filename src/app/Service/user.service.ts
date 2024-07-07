import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = "https://zonal-beauty-production.up.railway.app/api"

  constructor(private httpClient: HttpClient) { }

  login(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/login`);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, user);
  }


}
