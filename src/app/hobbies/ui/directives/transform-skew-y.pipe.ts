import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformSkewY',
  standalone: true,
})
export class TransformSkewYPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `skewY(${value}deg)`;
  }
}
