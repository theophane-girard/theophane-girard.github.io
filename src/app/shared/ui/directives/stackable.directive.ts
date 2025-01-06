import { Directive } from '@angular/core';

@Directive({
  selector: '[stackable]',
  standalone: true,
  host: {
    '[style.position]': '"sticky"',
    '[style.top]': '"0"',
    '[style.transform-origin]': '"center top"',
  },
})
export class StackableDirective {}
