import { SocialsComponent } from './socials.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('SocialsComponent', () => {
  let spectator: Spectator<SocialsComponent>;
  const createComponent = createComponentFactory(SocialsComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the SocialsComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
