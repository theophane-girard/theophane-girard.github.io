import { FireComponent } from './fire.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('FireComponent', () => {
  let spectator: Spectator<FireComponent>;
  const createComponent = createComponentFactory(FireComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the FireComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
