import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, debounceTime, fromEvent, Observable } from 'rxjs';
import { ObserveVisibilityDirective } from '../shared/directives/observe-visibility.directive';
import { tap } from 'rxjs/operators';
import { WavePath, WAVES } from './data/waves.mock';

@Component({
  selector: 'cv-wave-separator',
  standalone: true,
  imports: [CommonModule, ObserveVisibilityDirective],
  template: `
    <ng-container *ngIf="scroll$ | async"></ng-container>
    <svg viewBox="0 300 900 300">
      <rect x="0" y="0" width="900" height="600" fill="#003c6a"></rect>
      <path
        *ngFor="let wave of waves; let i = index"
        [attr.id]="'wave' + i"
        [attr.fill]="wave.background"
        [ngClass]="{
          'animation-running': (isScrolling$ | async)
        }"
      ></path>
    </svg>
  `,
  styleUrls: ['./wave-separator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaveSeparatorComponent {
  isScrolling$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  scroll$: Observable<Event> = fromEvent(window, 'scroll').pipe(
    tap(() => this.isScrolling$.next(true)),
    debounceTime(100),
    tap(() => this.isScrolling$.next(false))
  );
  waves: WavePath[] = WAVES;
}
