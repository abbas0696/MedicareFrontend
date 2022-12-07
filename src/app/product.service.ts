import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = "http://localhost:8088/api/product/";
  constructor(private http: HttpClient) { }

  getAllProduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
  getProdById(id:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+id);
  }
  deleteProduct(id:number){
    return this.http.delete(this.baseUrl+id);
  }
  saveProduct(prod: Product){
    return this.http.post(this.baseUrl,prod);
  }
}
