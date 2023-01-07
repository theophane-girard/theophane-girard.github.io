import { MeComponent } from './me.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('MeComponent', () => {
  let spectator: Spectator<MeComponent>;
  const createComponent = createComponentFactory(MeComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the MeComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
