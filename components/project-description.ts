export type ProjectDescription = {
  title: string;
  href: string;
  date: string;
  exhibited?: string | string[];
  images?: {
    src: string;
    caption?: string;
  }[];
  headerImage: string;
};
