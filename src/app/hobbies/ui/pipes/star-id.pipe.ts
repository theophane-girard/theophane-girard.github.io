import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starId',
  standalone: true,
})
export class StarIdPipe implements PipeTransform {
  transform(value: string, index: number): string {
    return `${value}-star-${index}`;
  }
}
