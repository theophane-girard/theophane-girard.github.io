import { HomeDescriptionComponent } from './home-description.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HomeDescriptionComponent', () => {
  let spectator: Spectator<HomeDescriptionComponent>;
  const createComponent = createComponentFactory(HomeDescriptionComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the HomeDescriptionComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
