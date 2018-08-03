import { ValidatorFn, AbstractControl } from '@angular/forms';

export function titleExist(booksTitles: Array<string>, except?: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        if (except) {
            for (let i = 0; i < booksTitles.length; i++){
                if (booksTitles[i] === control.value && booksTitles[i] !== except) {
                    return {'titleExist': {value: control.value}};
                }
            }
        }
        else {
            for (let i = 0; i < booksTitles.length; i++){
                if (booksTitles[i] === control.value) {
                    return {'titleExist': {value: control.value}};
                }
            }
        }
        return null;
    };
}
