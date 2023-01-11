import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'em',
  standalone: true,
})
export class EmPipe implements PipeTransform {
  transform(value: number | undefined, defaultValue?: number): string {
    if (value) {
      return value + 'em';
    }
    if (!defaultValue) {
      return 'auto';
    }
    return defaultValue + 'em';
  }
}
