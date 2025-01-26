import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLogin } from './api-login';

@Injectable({
  providedIn: 'root',
  deps: [HttpHandler, HttpClient]
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<ApiLogin>('http://localhost:80/api/login', { email, password })
      // this is just the HTTP call, 
      // we still need to handle the reception of the token
      .pipe();
  }
}
