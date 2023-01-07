import { SkyComponent } from './sky.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('SkyComponent', () => {
  let spectator: Spectator<SkyComponent>;
  const createComponent = createComponentFactory(SkyComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the SkyComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
