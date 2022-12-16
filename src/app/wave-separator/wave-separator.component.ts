import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, debounceTime, fromEvent, Observable } from 'rxjs';
import { ObserveVisibilityDirective } from '../shared/directives/observe-visibility.directive';
import { tap } from 'rxjs/operators';
import { WaveBackgrounds } from './data/waves.mock';
import { SectionComponent } from '../shared/ui/section.component';

@Component({
  selector: 'cv-wave-separator',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective],
  template: `
    <ng-container *ngIf="scroll$ | async"></ng-container>
    <svg viewBox="0 300 900 300">
      <rect
        x="0"
        y="0"
        width="900"
        height="600"
        [attr.fill]="backgroundColor"
      ></rect>
      <path
        *ngFor="let wave of waves; let i = index"
        [attr.id]="'wave' + i"
        [attr.fill]="wave.backgroundColor"
        [ngClass]="{
          'animation-running': (isScrolling$ | async)
        }"
      ></path>
    </svg>
  `,
  styleUrls: ['./wave-separator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaveSeparatorComponent extends SectionComponent {
  isScrolling$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  scroll$: Observable<Event> = fromEvent(window, 'scroll').pipe(
    tap(() => this.isScrolling$.next(true)),
    debounceTime(100),
    tap(() => this.isScrolling$.next(false))
  );
  waves: WaveBackgrounds[];

  @Input() set colors(waves: WaveBackgrounds[]) {
    this.waves = waves;
  }
}
