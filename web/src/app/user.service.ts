
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class UserService {

  HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient){

  }

  registerNewUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/users/',userData,
    {headers: this.HttpHeaders});
  }

  loginForUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/',userData);
  }

}

