import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { Hands } from './clock.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-clock',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article id="clock" class="position-absolute">
      <div class="position-absolute" id="hand-axis"></div>
      <embed id="notches" src="assets/clock.svg" />
      <div class="hours-container">
        <div
          id="hours"
          [style.webkitTransform]="hoursMove$ | async"
          [style.transform]="hoursMove$ | async"
        ></div>
      </div>
      <div class="minutes-container">
        <div
          id="minutes"
          [style.webkitTransform]="minutesMove$ | async"
          [style.transform]="minutesMove$ | async"
        ></div>
      </div>
      <div class="seconds-container">
        <div
          id="seconds"
          [style.webkitTransform]="secondsMove$ | async"
          [style.transform]="secondsMove$ | async"
        ></div>
      </div>
    </article>
  `,
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  secondsAngle: number;
  hands: Hands;
  secondsMove$: Observable<any>;
  minutesMove$: Observable<any>;
  minutesInterval$: BehaviorSubject<any>;
  hoursMove$: Observable<any>;
  minutesInterval = 60000;
  intervalSeconds$ = interval(1000).pipe(shareReplay(1));

  constructor() {
    this.initClockHands();
    this.initHandsRotate();
  }

  initHandsRotate() {
    this.secondsMove$ = this.intervalSeconds$.pipe(
      map(() => this.formatRotate('seconds', 6)),
      startWith(this.formatRotate('seconds')),
      shareReplay(1)
    );
    this.minutesInterval$ = new BehaviorSubject(
      this.getRemainingSecUntilMinuteMove()
    );
    this.minutesMove$ = this.minutesInterval$.pipe(
      switchMap((seconds) => interval(seconds)),
      map(() => this.formatRotate('minutes', 6)),
      tap(() => this.updateMinutesInterval()),
      startWith(this.formatRotate('minutes')),
      shareReplay(1)
    );
    this.hoursMove$ = this.intervalSeconds$.pipe(
      map(() => this.formatRotate('hours', 360 / (3600 * 12))),
      startWith(this.formatRotate('hours')),
      shareReplay(1)
    );
  }

  formatRotate(handIndex: keyof Hands, degAmount?: number) {
    const format = (deg: number) => `rotateZ(${deg}deg)`;
    if (!degAmount) {
      return format(this.hands[handIndex]);
    }
    this.hands[handIndex] += degAmount;
    return format(this.hands[handIndex]);
  }

  initClockHands() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    this.hands = {
      hours: hours * 30 + minutes / 2,
      minutes: minutes * 6,
      seconds: seconds * 6,
    };
    this.secondsAngle = this.hands.seconds;
  }

  updateMinutesInterval(): void {
    if (this.minutesInterval$.value === this.minutesInterval) {
      return;
    }
    this.minutesInterval$.next(this.minutesInterval);
  }

  getRemainingSecUntilMinuteMove(): number {
    return ((360 - this.secondsAngle) / 6 + 0.1) * 1000;
  }
}
