import { HobbiesComponent } from './hobbies.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HobbiesComponent', () => {
  let spectator: Spectator<HobbiesComponent>;
  const createComponent = createComponentFactory(HobbiesComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the HobbiesComponent', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should have description and picture hidden at load and visible at visible$ emit', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.query('.visible')).toBeFalsy();
    spectator.component.visible$.next(true);
    spectator.detectComponentChanges();
    expect(spectator.query('.visible')).toBeTruthy();
  });
});
