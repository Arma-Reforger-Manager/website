import { Component } from '@angular/core';
import globals_vars from '../globals';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
	selector: 'app-login',
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
})
export class LoginComponent {
	login = globals_vars.login
	form: FormGroup;

	constructor(private fb: FormBuilder, private authService: LoginService, private router: Router) {

		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});

	}

	register_button() {
		this.router.navigateByUrl('/register');
	}

	login_button() {
		const val = this.form.value;

		if (val.email && val.password) {
			console.log(this.authService.login)
			this.authService.login(val.email, val.password)
				.subscribe(
					(data) => {
						this.authService.SetSession(data);
						if (data.token) {
							globals_vars.jwt = data.token;
						}

						// this.router.navigateByUrl('/');
					}
				);
		}
	}
}
