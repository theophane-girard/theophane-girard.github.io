export type Logo = {
  url: string;
  isBackgroundColorWhite?: boolean;
  style?: Record<string, unknown>
};

export type Tag = {
  backgroundColor: string;
  textColor: string;
  label: string;
  link?: string;
  logo: string
};
