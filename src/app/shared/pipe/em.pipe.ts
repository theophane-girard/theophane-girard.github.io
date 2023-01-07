import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'em',
  standalone: true,
})
export class EmPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return 'auto';
    }
    return value + 'em';
  }
}
