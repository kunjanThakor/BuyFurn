import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: String = "https://buyfurnbackendapis.onrender.com/api"

  getAllUsers(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getall`);
  }
}
