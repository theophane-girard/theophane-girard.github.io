import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[zIndex]',
  standalone: true,
})
export class ZIndexDirective {
  @HostBinding('style.z-index') value: string;

  @Input() set zIndex(value: string) {
    this.value = value;
  }
}
