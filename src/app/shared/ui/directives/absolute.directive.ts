import { Directive } from '@angular/core';

@Directive({
  selector: '[absolute]',
  standalone: true,
  host: {
    '[style.position]': '"absolute"',
  },
})
export class AbsoluteDirective {
  constructor() {}
}
