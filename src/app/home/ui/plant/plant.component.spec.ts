import { PlantComponent } from './plant.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('PlantComponent', () => {
  let spectator: Spectator<PlantComponent>;
  const createComponent = createComponentFactory(PlantComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the PlantComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
