import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  roundTo(n: number, digits: number): number {
    let negative = false;
    if (digits === undefined) {
        digits = 0;
    }
    if (n < 0) {
      negative = true;
      n = n * -1;
    }
    const multiplicator: number = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    n = +(Math.round(n) / multiplicator).toFixed(2);
    if (negative) {
      n = +(n * -1).toFixed(2);
    }
    return n;
  }
  transform(value: number, tax: number, duty: number, ...args: any[]): number {
    let totalTax: number = value * (tax + duty);
    totalTax = this.roundTo(totalTax, 2);
    return totalTax;
  }

}
