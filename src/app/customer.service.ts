import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string= "http://localhost:8088/api/customer/";

  constructor(private http: HttpClient) { }

  getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl);
  }
  getCustById(id:number): Observable<Customer>{
    return this.http.get<Customer>(this.baseUrl+id);
  }
  deleteCustomer(id:number){
    return this.http.delete(this.baseUrl+id);
  }
  saveCustomer(cust: Customer){
    return this.http.post(this.baseUrl,cust);
  }
  updateCustomer(cust: Customer, id:number){
    return this.http.put(this.baseUrl+id,cust);

  }

}
