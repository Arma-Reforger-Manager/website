import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LogSearch, LogSearchFormats } from '../interfaces/logs';
import { LogsService } from '../logs.service';

@Component({
	selector: 'app-logs',
	imports: [ReactiveFormsModule, CommonModule],
	templateUrl: './logs.component.html',
	styleUrl: './logs.component.css'
})
export class LogsComponent {
	form: FormGroup;
	values: LogSearch[];
	enhancedSearch = false;
	searchValue = 'NONE';
	searchFormat: LogSearchFormats = 'SERVER.TOKEN';
	showError = false;
	errorMessage = 'NONE';

	constructor(private fb: FormBuilder, private logsService: LogsService, private router: Router) {
		this.values = [];
		this.form = this.fb.group({
			value: ['', Validators.required],
		});
	}

	// true = valid & passed
	private CustomValidator(value: string) {
		let ToProcess = String(value).trim();
		console.debug({start: {ToProcess}})

		// Is token?
		if (ToProcess.substring(0, 5) === 'token') {
			if (ToProcess.substring(6, 13) === 'website') {
				this.searchFormat = 'WEBSITE.TOKEN';
				this.searchValue = ToProcess.substring(14, ToProcess.length)
				return true
			}
			if (ToProcess.substring(6, 12) === 'server') {
				this.searchFormat = 'IPV4.PORT';
				this.searchValue = ToProcess.substring(13, ToProcess.length)
				return true
			}
		}

		// Is IPv4?
		if (ToProcess.includes('.')) {
			const Splitted = ToProcess.split('.');
			if (Splitted.length === 4) {
				// Has IPv4 but does it Have port?
				if (Splitted[3].includes(':')) {
					this.searchFormat = 'IPV4.PORT';
					this.searchValue = ToProcess;
					return true;
				} else {
					// No Port just IPv4
					this.searchFormat = 'IPV4';
					this.searchValue = ToProcess;
					return true;
				}
			}
		}

		// IPv6?
		if (ToProcess.includes(':')) {
			const Splitted = ToProcess.split('.');
			if (Splitted.length > 4) {
				this.searchFormat = 'IPV6';
				this.searchValue = ToProcess;
				return true;
			}
		}

		console.debug({end: {ToProcess}})
		return false;
	}
	SubmitSearch() {
		const val = this.form.value;
		if (val.value) {
			if (this.CustomValidator(val.value) === false) {
				this.showError = true;
				this.errorMessage = `Failed to validate, please review and try again, "${val.value}"`
			} else {
				this.showError = false;
				this.errorMessage = 'NONE';
				console.debug({one: this.searchValue, two: this.searchFormat})
				this.enhancedSearch = !this.enhancedSearch;
				
				this.logsService.SearchWithValue(this.searchValue, this.searchFormat).subscribe((value) => {
					console.debug({value})
					this.values = value;
				})
			}
		}
	}
}
