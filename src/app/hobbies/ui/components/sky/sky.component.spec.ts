import { SkyComponent } from './sky.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('SkyComponent', () => {
  let spectator: Spectator<SkyComponent>;
  const createComponent = createComponentFactory(SkyComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the SkyComponent', () => {
    expect(spectator.component).toBeTruthy();
    expect(spectator.queryAll('.star').length).toBe(75);
    expect(spectator.queryAll('.little-star-1').length).toBe(12);
    expect(spectator.queryAll('.little-star-2').length).toBe(13);
    expect(spectator.queryAll('.medium-star-1').length).toBe(12);
    expect(spectator.queryAll('.medium-star-2').length).toBe(13);
    expect(spectator.queryAll('.big-star-1').length).toBe(12);
    expect(spectator.queryAll('.big-star-2').length).toBe(13);
  });
});
