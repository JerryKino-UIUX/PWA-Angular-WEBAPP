import { AbstractControl, ValidationErrors } from '@angular/forms';

export function domainValidator(control: AbstractControl): ValidationErrors | null {
  const valid = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(control.value);
  return valid ? null : { invalidDomain: true };
}