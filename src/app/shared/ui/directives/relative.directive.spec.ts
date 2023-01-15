import { RelativeDirective } from './relative.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('RelativeDirective', () => {
  let spectator: SpectatorDirective<RelativeDirective>;
  const createDirective = createDirectiveFactory(RelativeDirective);

  beforeEach(() => {
    spectator = createDirective(
      `<div relative>Testing Relative Directive</div>`
    );
  });

  it('should display a position-relative div element', () => {
    expect(spectator.query('[style*="position: relative"]')).toBeTruthy();
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });
});
