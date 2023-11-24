import { Tag } from '@shared/data/shared.model';
import { Skill } from 'src/app/xp/data/timeline.model';

export const SKILLS: Skill[] = [
  {
    name: 'Angular',
    logo: {
      url: 'assets/skill-logos/ng.gif',
      isBackgroundColorWhite: true,
      height: 20,
      width: 20
    },
  },
  {
    name: 'NodeJs',
    logo: {
      url: 'assets/skill-logos/nodejs.svg',
      isBackgroundColorWhite: true,
      height: 20,
      width: 20
    },
  },
];
