import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';
import { AbsoluteDirective } from '@shared/ui/directives/absolute.directive';

describe('AbsoluteDirective', () => {
  let spectator: SpectatorDirective<AbsoluteDirective>;
  const createDirective = createDirectiveFactory(AbsoluteDirective);

  beforeEach(() => {
    spectator = createDirective(
      `<div absolute>Testing Absolute Directive</div>`
    );
  });

  it('should display a position-absolute div element', () => {
    expect(spectator.query('[style*="position: absolute"]')).toBeTruthy();
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });
});
