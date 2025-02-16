import { HttpHandler, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogSearch, LogSearchFormats } from './interfaces/logs';
import { environment } from './environments/environment.development';
import { LoginService } from './login.service';
import { ApiLogin } from './interfaces/api-login';

@Injectable({
    providedIn: 'root',
    deps: [HttpHandler, HttpClient]
})
export class LogsService {

    constructor(private http: HttpClient, private loginServce: LoginService) {

    }

    SearchWithValue(value: string, format: LogSearchFormats) {
        return this.http.get<LogSearch[]>(`${environment.apiUrl}/logs?=${this.loginServce.GetSessionGetToken()}`).pipe()
    }
}
