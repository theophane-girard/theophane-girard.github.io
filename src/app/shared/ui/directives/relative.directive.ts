import { Directive } from '@angular/core';

@Directive({
  selector: '[relative]',
  host: {
    '[style.position]': '"relative"',
  },
  standalone: true,
})
export class RelativeDirective {
  constructor() {}
}
