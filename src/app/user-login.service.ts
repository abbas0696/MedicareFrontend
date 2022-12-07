import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './UserLogin';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  baseUrl: string = "http://localhost:8088/api/userLogin/";
  constructor(private http: HttpClient) { }

  getAllUserLogin():Observable<UserLogin[]>{
    return this.http.get<UserLogin[]>(this.baseUrl);
  }
  saveUserlogin(userlogin: UserLogin){
    return this.http.post(this.baseUrl,userlogin);
  }

  

}
