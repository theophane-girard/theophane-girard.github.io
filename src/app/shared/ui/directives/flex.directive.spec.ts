import { FlexDirective } from './flex.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

describe('FlexDirective', () => {
  let spectator: SpectatorDirective<FlexDirective>;
  const createDirective = createDirectiveFactory(FlexDirective);

  beforeEach(() => {
    spectator = createDirective(`<div flex>Testing Flex Directive</div>`);
  });

  it('should display a display-flex div element', () => {
    expect(spectator.query('[style*="display: flex"]')).toBeTruthy();
  });

  it('should get the instance', () => {
    const instance = spectator.directive;
    expect(instance).toBeDefined();
  });
});
