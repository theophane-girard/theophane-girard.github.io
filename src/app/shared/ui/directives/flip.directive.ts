import { Directive } from '@angular/core';

@Directive({
  selector: '[flip]',
  standalone: true,
  host: {
    '[style.transform]': '"rotateY(180deg)"',
  },
})
export class FlipDirective {}
