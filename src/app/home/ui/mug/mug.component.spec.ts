import { MugComponent } from './mug.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('MugComponent', () => {
  let spectator: Spectator<MugComponent>;
  const createComponent = createComponentFactory(MugComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the MugComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
