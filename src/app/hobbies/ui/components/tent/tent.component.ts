import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-tent',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id="tent" class="position-relative">
      <div id="left-door" class="z-index-1 position-absolute bottom-0"></div>
      <div id="right-door" class="z-index-1 position-absolute bottom-0"></div>
      <div id="side-chamber" class="z-index-1 position-absolute bottom-0"></div>
      <div id="out-roof" class="z-index-2 position-absolute bottom-0"></div>
      <div id="in-roof" class="position-absolute bottom-0"></div>
      <div id="stake" class="z-index-1 position-absolute bottom-0"></div>
      <div id="left-stake-edge" class="position-absolute bottom-0"></div>
      <div id="right-stake-edge" class="position-absolute bottom-0"></div>
    </div>
  `,
  styleUrls: ['./tent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TentComponent {}
