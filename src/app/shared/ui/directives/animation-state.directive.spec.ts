import { AnimationStateDirective } from './animation-state.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('AnimationStateDirective', () => {
  let spectator: SpectatorDirective<AnimationStateDirective>;
  const createDirective = createDirectiveFactory(AnimationStateDirective);

  beforeEach(() => {
    spectator = createDirective(
      `<div animationState>Testing AnimationStateDirective</div>`
    );
  });

  it('should display an animationState div element', () => {
    const instance = spectator.directive;
    expect(
      spectator.query('[style*="animation-play-state: paused"]')
    ).toBeTruthy();
    expect(
      spectator.query('[style*="animation-play-state: running"]')
    ).toBeFalsy();
    instance.isRunning = true;
    spectator.detectChanges();
    expect(
      spectator.query('[style*="animation-play-state: running"]')
    ).toBeTruthy();
    expect(
      spectator.query('[style*="animation-play-state: paused"]')
    ).toBeFalsy();
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });
});
