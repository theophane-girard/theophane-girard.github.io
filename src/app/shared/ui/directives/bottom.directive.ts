import { Directive, HostBinding, Input } from '@angular/core';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Directive({
  selector: '[bottom]',
  hostDirectives: [AbsoluteDirective],
  standalone: true,
})
export class BottomDirective {
  @HostBinding('style.bottom') value: string;

  @Input() set bottom(value: string) {
    this.value = value;
  }
}
