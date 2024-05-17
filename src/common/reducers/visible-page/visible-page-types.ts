export enum Page {
  HOME = 'WELCOME',
  EXPERIENCE = 'EXPERIENCE',
  YOUTUBE = 'YOUTUBE',
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
}

export type PageVisibility = {
  page: Page;
  intersectionRatio: number | undefined;
}

export type VisiblePageState = {
  HOME: number;
  EXPERIENCE: number;
  YOUTUBE: number;
  WHOAMI: number;
  PROJECTS: number;
};
