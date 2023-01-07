import { HomePictureComponent } from './home-picture.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HomePictureComponent', () => {
  let spectator: Spectator<HomePictureComponent>;
  const createComponent = createComponentFactory(HomePictureComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the HomePictureComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
