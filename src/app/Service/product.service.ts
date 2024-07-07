import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: String = "https://zonal-beauty-production.up.railway.app/api/admin"
  constructor(private httpclient: HttpClient) { }

  addProduct(product: any, images: File[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('product', JSON.stringify(product));

    images.forEach((image, index) => {
      formData.append('imgs', image, image.name);
    });

    return this.httpclient.post(`${this.baseUrl}/addproduct`, formData);
  }
}
