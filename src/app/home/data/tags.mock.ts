import {Skill} from 'src/app/xp/data/timeline.model';

export const SKILLS: Skill[] = [
  {
    name: 'Angular',
    logo: {
      url: 'assets/skill-logos/ng.gif',
      isBackgroundColorWhite: true,
      style: {
        height: "2em",
        width: "2em"
      }
    },
  },
  {
    name: 'NodeJs',
    logo: {
      url: 'assets/skill-logos/node-square.svg',
      isBackgroundColorWhite: true,
      style: {
        height: "2em",
        width: "2em",
        position: "relative",
        top: "-1.5px",
      }
    },
  },
];
