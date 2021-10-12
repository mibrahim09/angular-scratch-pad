import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidator {
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value == 'test') resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
}
