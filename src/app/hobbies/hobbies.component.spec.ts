import { HobbiesComponent } from './hobbies.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HobbiesComponent', () => {
  let spectator: Spectator<HobbiesComponent>;
  const createComponent = createComponentFactory(HobbiesComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the HobbiesComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
