import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleformat'
})
export class TitleformatPipe implements PipeTransform {
  private pattern: RegExp = /\w+/g;

  transform(value: string, args?: any): any {
    value = value.toLocaleLowerCase();
    const result = value.match(this.pattern);
    result.forEach((str, index) => {
      result[index] = str[0].toUpperCase() + str.slice(1);
    });
    return result.join(' ');
  }

}
