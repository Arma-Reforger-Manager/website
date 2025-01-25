import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent as App2 } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'zomato-clone';
}

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, // add here if necessasry
    RouterLinkActive,// add here if necessasry
    RouterOutlet, // add here if necessasry
    RouterLink,// add here if necessasry
    
  ],
  providers: [],
  bootstrap: [AppComponent, LoginComponent]
})
export class AppModule { }