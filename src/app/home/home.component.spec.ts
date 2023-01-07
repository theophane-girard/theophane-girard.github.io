import { HomeComponent } from './home.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory(HomeComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the HomeComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
