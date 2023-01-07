import { XpComponent } from './xp.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('XpComponent', () => {
  let spectator: Spectator<XpComponent>;
  const createComponent = createComponentFactory(XpComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the xp component', () => {
    expect(spectator.component).toBeTruthy();
  });
});
