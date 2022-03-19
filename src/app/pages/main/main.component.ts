import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
	form!: FormGroup

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			username: this.fb.control('', { validators: [Validators.required] }),
			password: this.fb.control('', { validators: [Validators.required] })
		})
	}

	handleSubmit() {
		console.log('handleSubmit', this.form.valid, this.form.value)
	}
}
