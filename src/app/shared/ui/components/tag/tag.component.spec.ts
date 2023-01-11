import { TagComponent } from './tag.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('TagComponent', () => {
  let spectator: Spectator<TagComponent>;
  const createComponent = createComponentFactory(TagComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the TagComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
