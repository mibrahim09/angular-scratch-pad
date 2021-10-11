import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle',
})
export class CustomTitlePipe implements PipeTransform {
  ignored = ['of', 'the'];

  transform(value: string): any {
    if (!value) return '';

    var returnString = '';

    var first = false;

    value.split(' ').forEach((element) => {
      if (!first) {
        returnString += this.captilize(element) + ' ';
        first = true;
      } else {
        if (this.ignored.includes(element.toLowerCase()))
          returnString += `${element.toLowerCase()} `;
        else returnString += `${this.captilize(element)} `;
      }
    });
    return returnString;
  }
  captilize(value: string): string {
    if (!value) return value;
    return value[0].toUpperCase() + value.substr(1).toLowerCase();
  }
}
