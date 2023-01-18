import { BottomDirective } from './bottom.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('BottomDirective', () => {
  let spectator: SpectatorDirective<BottomDirective>;
  const createDirective = createDirectiveFactory(BottomDirective);

  beforeEach(() => {
    spectator = createDirective(
      `<div bottom="1px">Testing BottomDirective</div>`
    );
  });

  it('should display a bottom: 1 div element', () => {
    expect(spectator.query('[style*="bottom: 1px"]')).toBeTruthy();
    expect(spectator.query('[style*="position: absolute"]')).toBeTruthy();
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });
});
