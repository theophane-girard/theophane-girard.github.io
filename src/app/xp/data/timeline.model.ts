export interface Skill {
  name: string;
  logo?: Logo;
}

export interface XpSection {
  title: string;
  description: string;
  organization: {
    name: string;
    logo: Logo;
    url: string;
  };
  skills: Skill[];
}

export interface Logo {
  url: string;
  isBackgroundColorWhite?: boolean;
}

export interface TimelineSection {
  duration: string;
  pro: XpSection;
  education: XpSection | undefined;
}
