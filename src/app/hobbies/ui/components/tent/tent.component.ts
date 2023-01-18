import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { ZIndexDirective } from '@shared/ui/directives/z-index.directive';
import { BottomDirective } from '@shared/ui/directives/bottom.directive';

@Component({
  selector: 'cv-tent',
  standalone: true,
  imports: [
    CommonModule,
    RelativeDirective,
    AbsoluteDirective,
    ZIndexDirective,
    BottomDirective,
  ],
  template: `
    <div id="tent" relative>
      <div id="out-roof" bottom="0"></div>
      <div id="in-roof" bottom="0"></div>
      <div id="stake" absolute></div>
      <div id="left-stake-edge" absolute></div>
      <div id="right-stake-edge" absolute></div>
      <div id="left-door" bottom="0"></div>
      <div id="right-door" bottom="0"></div>
      <div id="side-chamber" bottom="0"></div>
    </div>
  `,
  styleUrls: ['./tent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TentComponent {}
