import { ValidatorFn, AbstractControl } from '@angular/forms';

export function dateCheck(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const date = new Date(control.value);
        return (isNaN(date.getDate()) || date > (new Date())) ? {'dateCheck': {value: control.value}} : null;
    };
}
