import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelativeDirective } from '@shared/ui/directives/relative.directive';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';
import { TransformSkewYPipe } from '../../directives/transform-skew-y.pipe';

@Component({
  selector: 'cv-pine-tree',
  standalone: true,
  imports: [
    CommonModule,
    TransformSkewYPipe,
    RelativeDirective,
    AbsoluteDirective,
    TransformSkewYPipe,
  ],
  template: `
    <div id="container" relative>
      <div id="pine-tree-bottom" absolute></div>
      <div id="pine-tree-middle" absolute></div>
      <div id="pine-tree-top" absolute></div>
      <div
        [style.transform]="skewDegree | transformSkewY"
        id="trunk"
        absolute
      ></div>
    </div>
  `,
  styleUrls: ['./pine-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PineTreeComponent {
  @Input() skewDegree: number;
}
