import { SkillListComponent } from './skill-list.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('SkillListComponent', () => {
  let spectator: Spectator<SkillListComponent>;
  const createComponent = createComponentFactory(SkillListComponent);
  beforeEach(async () => (spectator = createComponent()));

  it('should create the SkillListComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
