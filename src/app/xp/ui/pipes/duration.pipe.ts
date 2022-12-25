import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(value: string, isFirst: boolean): unknown {
    if (!isFirst) {
      return value;
    }
    return `${value} (current)`;
  }
}
