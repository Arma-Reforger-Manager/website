import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [

    { path: 'crisis-list', component: CrisisListComponent },
    { path: 'heroes-list', component: HeroesListComponent },
    { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
    { path: '**', component: ErrorPageComponent },
    { path: 'lazy', loadComponent: () => import('./error-page/error-page.component').then(c => c.ErrorPageComponent)}

];
