import { TentComponent } from './tent.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('TentComponent', () => {
  let spectator: Spectator<TentComponent>;
  const createComponent = createComponentFactory(TentComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the TentComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
