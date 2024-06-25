import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = 'http://localhost:8086/api';
  constructor(private http: HttpClient) { }

  login(username: any, password: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/login`)
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user)
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getall`)
  }
}
