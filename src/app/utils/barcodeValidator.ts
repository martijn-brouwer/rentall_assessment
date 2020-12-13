import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[barcodeValidateDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppBarcodeValidateDirective,
    multi: true
  }]
})
export class AppBarcodeValidateDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: any} | null {
    if (control.value && control.value.length != 10) {
      return { 'barcodeInvalid': true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }
}