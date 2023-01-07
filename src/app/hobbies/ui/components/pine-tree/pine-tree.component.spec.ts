import { PineTreeComponent } from './pine-tree.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('PineTreeComponent', () => {
  let spectator: Spectator<PineTreeComponent>;
  const createComponent = createComponentFactory(PineTreeComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the PineTreeComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
