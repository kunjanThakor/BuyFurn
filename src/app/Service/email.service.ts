import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient: HttpClient) { }

  baseUrl: String = "https://buyfurnbackendapis.onrender.com/api"


  sendMail(email: EmailService) {
    return this.httpClient.post(`${this.baseUrl}/send-email`, email)
  }
}
