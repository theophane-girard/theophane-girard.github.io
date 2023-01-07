import { WaveSeparatorComponent } from './wave-separator.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('WaveSeparatorComponent', () => {
  let spectator: Spectator<WaveSeparatorComponent>;
  const createComponent = createComponentFactory(WaveSeparatorComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the WaveSeparatorComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
