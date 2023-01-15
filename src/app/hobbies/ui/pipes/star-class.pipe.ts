import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starClass',
  standalone: true,
})
export class StarClassPipe implements PipeTransform {
  transform(value: string, index: number): { [s: string]: boolean } {
    return {
      [`${value}-star-1`]: Boolean(index % 2),
      [`${value}-star-2`]: !(index % 2),
      [`${value}-stars`]: true,
      star: true,
    };
  }
}
