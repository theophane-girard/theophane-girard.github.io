import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-grass',
  standalone: true,
  imports: [CommonModule, RelativeDirective, AbsoluteDirective],
  template: `
    <div id="container" relative>
      <div class="neutral-grass-blade" absolute></div>
      <div class="light-grass-blade" absolute></div>
      <div class="dark-grass-blade" absolute></div>
    </div>
  `,
  styleUrls: ['./grass.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrassComponent {}
