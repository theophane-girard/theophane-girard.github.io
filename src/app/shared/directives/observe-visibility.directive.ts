import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { delay, filter, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Directive({
  selector: '[observeVisibility]',
  standalone: true,
})
export class ObserveVisibilityDirective
  implements OnDestroy, OnInit, AfterViewInit
{
  @Input() debounceTime = 0;
  @Input() threshold = 1;
  @Output() visible = new EventEmitter<HTMLElement>();

  private observer: IntersectionObserver | undefined;
  private subject$ = new Subject<{
    entry: IntersectionObserverEntry;
    observer: IntersectionObserver;
  }>();

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.createObserver();
  }

  ngAfterViewInit() {
    this.startObservingElements();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }

    this.subject$.complete();
  }

  private createObserver() {
    const options = {
      rootMargin: '0px',
      threshold: this.threshold,
    };

    const isIntersecting = (entry: IntersectionObserverEntry) =>
      entry.isIntersecting || entry.intersectionRatio > 0;

    this.observer = new IntersectionObserver(
      (entries, observer) =>
        entries
          .filter((entry) => isIntersecting(entry))
          .forEach((entry) => this.subject$.next({ entry, observer })),
      options
    );
  }

  private startObservingElements() {
    if (!this.observer) {
      return;
    }

    this.observer.observe(this.element.nativeElement);

    this.subject$
      .pipe(
        delay(this.debounceTime),
        filter(Boolean),
        map(({ entry, observer }) => ({
          target: entry.target as HTMLElement,
          observer,
        })),
        tap(({ target, observer }) => this.visible.emit(target)),
        tap(({ target, observer }) => observer.unobserve(target))
      )
      .subscribe();
  }
}
