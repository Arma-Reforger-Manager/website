import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { environment } from './environments/environment.development';
import { ApiLogin } from './interfaces/api-login';

@Injectable({
  providedIn: 'root',
  deps: [HttpHandler, HttpClient]
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<ApiLogin>(environment.apiUrl + '/log-in', { username, password }).pipe();
  }

  SetSession(loginFunctionResult: ApiLogin) {
    localStorage.setItem('id_token', loginFunctionResult.token);
    localStorage.setItem("id_expires_at", String(loginFunctionResult.expiration_ms));
  }

  GetSessionGetToken() {
    const id_token = localStorage.getItem('id_token');
    const id_expires_at = localStorage.getItem('id_expires_at');
    const currentDate = new Date();
    if (!id_token) {
      return false;
    }
    if (currentDate.valueOf() > Number(id_expires_at)) {
      // Session is exipred
      return false;
    } else {
      return id_token;
    }
  }
}
