import { Component, ElementRef, Input, Optional, Self, ViewChild } from '@angular/core'
import { ControlValueAccessor, NgControl } from '@angular/forms'

@Component({
	selector: 'app-form-textfield',
	templateUrl: './form-textfield.component.html'

	// Only needed if constructor injection is not used!
	// providers: [
	// 	{
	// 		provide: NG_VALUE_ACCESSOR,
	// 		useExisting: forwardRef(() => FormTextfieldComponent),
	// 		multi: true
	// 	}
	// ]
})
export class FormTextfieldComponent implements ControlValueAccessor {
	constructor(
		@Self()
		@Optional()
		public ngControl: NgControl
	) {
		console.debug('constructor', ngControl)
		if (this.ngControl) {
			this.ngControl.valueAccessor = this
		}
	}

	value: any = ''
	@ViewChild('input') inputElement!: ElementRef<HTMLInputElement>
	@Input() placeholder?: string
	@Input() isDisabled: boolean = false
	@Input() type: 'text' | 'password' = 'text'

	handleChange() {
		console.debug('handleChange', this.ngControl.name)
		this.value = this.inputElement.nativeElement.value
		this.onChange(this.inputElement.nativeElement.value)
	}

	handleBlur(event: FocusEvent) {
		console.debug('handleBlur', this.ngControl.name, event)
		this.onTouched()
	}

	// event methods used by given callback fn from ControlValueAccessor
	private onChange(value: any) {}
	private onTouched() {}

	writeValue(value: any): void {
		console.debug('writeValue', this.ngControl.name, this.value, value)
		this.value = value
	}

	registerOnChange(fn: any): void {
		console.debug('registerOnChange', this.ngControl.name, fn)
		this.onChange = fn
	}

	registerOnTouched(fn: any): void {
		console.debug('registerOnTouched', this.ngControl.name, fn)
		this.onTouched = fn
	}

	setDisabledState(isDisabled: boolean): void {
		console.debug('setDisabledState', this.ngControl.name, isDisabled)
		this.isDisabled = isDisabled
	}
}
