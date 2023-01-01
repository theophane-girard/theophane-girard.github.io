import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformSkewYPipe } from '../../directives/transform-skew-y.pipe';

@Component({
  selector: 'cv-pine-tree',
  standalone: true,
  imports: [CommonModule, TransformSkewYPipe],
  template: `
    <div id="container" class="position-relative">
      <div id="pine-tree-bottom" class="position-absolute"></div>
      <div id="pine-tree-middle" class="position-absolute"></div>
      <div id="pine-tree-top" class="position-absolute"></div>
      <div
        [style.transform]="skewDegree | transformSkewY"
        id="trunk"
        class="position-absolute"
      ></div>
    </div>
  `,
  styleUrls: ['./pine-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PineTreeComponent {
  @Input() skewDegree: number;
}
