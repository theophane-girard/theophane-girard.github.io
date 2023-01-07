import { CliffComponent } from './cliff.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('CliffComponent', () => {
  let spectator: Spectator<CliffComponent>;
  const createComponent = createComponentFactory(CliffComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the CliffComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
