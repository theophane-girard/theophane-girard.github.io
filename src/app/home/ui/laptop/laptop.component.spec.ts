import { LaptopComponent } from './laptop.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('LaptopComponent', () => {
  let spectator: Spectator<LaptopComponent>;
  const createComponent = createComponentFactory(LaptopComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the LaptopComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
