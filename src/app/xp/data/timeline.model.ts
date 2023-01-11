import { Logo } from '@shared/data/shared.model';

export type Skill = {
  name: string;
  logo?: Logo;
};

export type XpSection = {
  title: string;
  description: string;
  organization: {
    name: string;
    logo: Logo;
    url: string;
  };
  skills: Skill[];
};

export type TimelineSection = {
  duration: string;
  pro: XpSection;
  education: XpSection | undefined;
};
