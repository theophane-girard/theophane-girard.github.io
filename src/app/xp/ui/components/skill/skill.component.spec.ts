import { SkillComponent } from './skill.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { TIMELINE } from '../../../data/timeline.mock';

describe('SkillComponent', () => {
  let spectator: Spectator<SkillComponent>;
  const createComponent = createComponentFactory(SkillComponent);
  beforeEach(
    async () =>
      (spectator = createComponent({
        props: {
          skill: TIMELINE[0].pro.skills[0],
        },
      }))
  );

  it('should create the SkillComponent', () => {
    expect(spectator.component).toBeTruthy();
  });
});
