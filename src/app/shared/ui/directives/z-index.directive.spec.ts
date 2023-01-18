import { ZIndexDirective } from './z-index.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('ZIndexDirective', () => {
  let spectator: SpectatorDirective<ZIndexDirective>;
  const createDirective = createDirectiveFactory(ZIndexDirective);

  beforeEach(() => {
    spectator = createDirective(
      `<div zIndex="1">Testing ZIndexDirective</div>`
    );
  });

  it('should display a z-index div element', () => {
    expect(spectator.query('[style*="z-index: 1"]')).toBeTruthy();
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });
});
