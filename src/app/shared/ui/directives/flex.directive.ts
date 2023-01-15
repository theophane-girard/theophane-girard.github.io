import { Directive } from '@angular/core';

@Directive({
  selector: '[flex]',
  standalone: true,
  host: {
    '[style.display]': '"flex"',
  },
})
export class FlexDirective {
  constructor() {}
}
