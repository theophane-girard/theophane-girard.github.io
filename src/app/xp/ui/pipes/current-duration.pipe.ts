import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currentDuration',
  standalone: true,
})
export class CurrentDurationPipe implements PipeTransform {
  transform(value: string, isFirst: boolean): unknown {
    if (!isFirst) {
      return value;
    }
    return `${value} (current)`;
  }
}
