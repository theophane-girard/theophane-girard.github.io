import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserveVisibilityDirective } from '../../../../shared/directives/observe-visibility.directive';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cv-progress-line',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective],
  template: `
    <!--    height="247"-->
    <!--    viewBox="0 0 361 247"-->
    <!--    width="361"-->
    <svg
      observeVisibility
      (visible)="visible$.next(true)"
      fill="none"
      width="692"
      height="290"
      viewBox="0 0 692 290"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M630.975 1.16841C652.602 192.102 596.399 227.341 495.362 238.81C394.324 250.28 272.787 148.982 164.642 169.584C56.497 190.186 -22.2122 318.862 10.386 412.572"
        class="path"
        stroke="white"
        stroke-width="4"
        stroke-dasharray="8 8"
        [ngClass]="{ 'animation-running': visible$ | async }"
      />
      <path
        d="M630.975 1.16841C652.602 192.102 596.399 227.341 495.362 238.81C394.324 250.28 272.787 148.982 164.642 169.584C56.497 190.186 -22.2122 318.862 10.386 412.572"
        class="dashed"
        stroke-width="6"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        [attr.stroke]="backgroundColor"
      />
    </svg>
  `,
  styleUrls: ['./progress-line.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressLineComponent {
  @Input() index: number;
  @Input() backgroundColor: string;
  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
