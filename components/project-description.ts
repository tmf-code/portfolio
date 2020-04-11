export type ProjectDescription = {
  title: string;
  date: string;
  exhibited?: string | string[];
  images?: {
    src: string;
    caption?: string;
  }[];
  headerImage?: string;
};
