import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcToUsd',
})
export class BtcToUsdPipe implements PipeTransform {
  transform(amount: number, isBtcToUsd: boolean = true): number {
    if (isBtcToUsd) {
      return amount * 58434;
    }
    return amount / 58434;
  }
  /* spread operator */
}
