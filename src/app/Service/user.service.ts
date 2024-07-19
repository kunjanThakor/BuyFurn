import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Interface/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: String = "https://buyfurnbackendapis.onrender.com/api"

  // baseUrl: String = "http://localhost:8089/api"
  constructor(private httpClient: HttpClient) { }

  login(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/login`);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, user);
  }

  generateOtp(email: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/generate-otp`, { email });
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/verify-otp`, { email, otp });
  }

  delteMyAccont(): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/user/delete`)
  }

  findByEmail(email: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/user/getByEmail/${email}`)
  }


  updateUser(user: any, img?: File): Observable<any> {
    // debugger
    if (img) {
      const formData: FormData = new FormData();
      formData.append('user', JSON.stringify(user));
      formData.append('img', img, img.name);
      return this.httpClient.post(`${this.baseUrl}/user/updateuser`, formData)
    }
    else {
      const formData: FormData = new FormData();
      formData.append('user', JSON.stringify(user));
      return this.httpClient.post(`${this.baseUrl}/user/updateuser`, formData)
    }

  }

}
