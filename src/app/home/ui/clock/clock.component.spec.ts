import { ClockComponent } from './clock.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('ClockComponent', () => {
  let spectator: Spectator<ClockComponent>;
  const createComponent = createComponentFactory(ClockComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the ClockComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
