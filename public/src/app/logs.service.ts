import { HttpHandler, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logs, LogSearchFormats } from './interfaces/logs';
import { environment } from './environments/environment.development';
import { LoginService } from './login.service';

@Injectable({
    providedIn: 'root',
    deps: [HttpHandler, HttpClient]
})
export class LogsService {

    constructor(private http: HttpClient, private loginServce: LoginService) {

    }

    SearchWithValue(value: string, format: LogSearchFormats) { 
        return this.http.get<Logs>(`${environment.apiUrl}/logs?token=${this.loginServce.GetSessionGetToken()}&value=${value}&format=${format}`).pipe()
    }
}
