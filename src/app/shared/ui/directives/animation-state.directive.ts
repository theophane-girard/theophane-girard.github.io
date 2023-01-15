import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[animationState]',
  standalone: true,
})
export class AnimationStateDirective {
  @HostBinding('style.animation-play-state') private animationState: string =
    'paused';

  constructor() {}

  @Input() set isRunning(isRunning: boolean | null) {
    if (isRunning) {
      this.animationState = 'running';
      return;
    }
    this.animationState = 'paused';
  }
}
