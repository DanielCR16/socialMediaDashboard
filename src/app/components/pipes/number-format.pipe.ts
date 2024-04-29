import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string |number {
    if (value >= 10000) {
      const formattedValue = value / 1000;
      return formattedValue + 'k';
    } else {
      return value;
    }
  }

}
