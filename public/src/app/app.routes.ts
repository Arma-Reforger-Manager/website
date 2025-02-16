import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LogsComponent } from './logs/logs.component';

export const routes: Routes = [

    { path: 'crisis-list', component: CrisisListComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logs', component: LogsComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: ErrorPageComponent },
    // { path: 'lazy', loadComponent: () => import('./error-page/error-page.component').then(c => c.ErrorPageComponent)}

];
