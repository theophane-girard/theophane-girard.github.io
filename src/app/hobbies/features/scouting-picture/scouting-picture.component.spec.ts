import { ScoutingPictureComponent } from './scouting-picture.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('ScoutingPictureComponent', () => {
  let spectator: Spectator<ScoutingPictureComponent>;
  const createComponent = createComponentFactory(ScoutingPictureComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the ScoutingPictureComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
