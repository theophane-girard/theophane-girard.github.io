import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

@Component({
  selector: 'cv-tent',
  standalone: true,
  imports: [CommonModule, RelativeDirective, AbsoluteDirective],
  template: `
    <div id="tent" relative>
      <div id="left-door" class="z-index-1 bottom-0" absolute></div>
      <div id="right-door" class="z-index-1 bottom-0" absolute></div>
      <div id="side-chamber" class="z-index-1 bottom-0" absolute></div>
      <div id="out-roof" class="z-index-2 bottom-0" absolute></div>
      <div id="in-roof" class="bottom-0" absolute></div>
      <div id="stake" class="z-index-1 bottom-0" absolute></div>
      <div id="left-stake-edge" class="bottom-0" absolute></div>
      <div id="right-stake-edge" class="bottom-0" absolute></div>
    </div>
  `,
  styleUrls: ['./tent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TentComponent {}
