import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: String = "https://zonal-beauty-production.up.railway.app/api/admin"
  baseUrl1: String = "https://zonal-beauty-production.up.railway.app/api"
  constructor(private httpclient: HttpClient) { }

  addProduct(product: any, images: File[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('product', JSON.stringify(product));

    images.forEach((image) => {
      formData.append('imgs', image, image.name);
    });

    return this.httpclient.post(`${this.baseUrl}/addproduct`, formData);
  }

  getAllProducts(): Observable<any> {
    return this.httpclient.get(`${this.baseUrl1}/getallproducts`);
  }

  getProductById(id: any): Observable<any> {
    return this.httpclient.get(`${this.baseUrl1}/getbyid/${id}`)
  }

  deleteProductById(id: any): Observable<any> {
    return this.httpclient.delete(`${this.baseUrl}/deletebyid/${id}`)
  }

  updateProductById(product: any, images: File[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('product', JSON.stringify(product));

    images.forEach((image) => {
      formData.append('imgs', image, image.name);
    }); return this.httpclient.post(`${this.baseUrl}/updateproduct`, formData)
  }
}
