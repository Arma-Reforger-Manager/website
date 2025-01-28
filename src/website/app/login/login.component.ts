import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth.service';
import GLOBALS from '../globals';
import { environment } from '../environments/environment';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	standalone: true,
	imports: [
		ReactiveFormsModule 
	]
})
export class LoginComponent implements OnInit {
	form: FormGroup;
	standalone  = true;

	constructor(
		private fb: FormBuilder,
		private authService: AuthServiceService,
		private router: Router
	) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	ngOnInit(): void {
	}

	login() {
		const val = this.form.value;

		if (val.email && val.password) {
			this.authService.login(val.email, val.password)
				.subscribe(
					(data) => {
						console.log(data)
						console.log("User is logged in");
						console.debug(environment)
						if (data.jwt) {
							GLOBALS.jwt = data.jwt;
						}
						// this.router.navigateByUrl('/');
					}
				);
		}
	}
}
