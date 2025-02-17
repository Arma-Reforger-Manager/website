import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiLogin } from './interfaces/api-login';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
  deps: [HttpHandler, HttpClient]
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<ApiLogin>(environment.apiUrl + '/log-in', { email, password })
      // this is just the HTTP call, 
      // we still need to handle the reception of the token
      .pipe();
  }
}