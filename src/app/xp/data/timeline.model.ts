export interface XpSection {
  title: string;
  description: string;
  organization: {
    name: string;
    logo: string;
    url: string;
  };
  skills: {
    name: string;
    logo: string;
  }[];
}

export interface TimelineSection {
  duration: string;
  pro: XpSection;
  education: XpSection | undefined;
}
