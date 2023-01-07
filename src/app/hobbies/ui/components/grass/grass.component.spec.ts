import { GrassComponent } from './grass.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('GrassComponent', () => {
  let spectator: Spectator<GrassComponent>;
  const createComponent = createComponentFactory(GrassComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the GrassComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
