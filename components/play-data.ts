import { ProjectDescription } from './project-description';

export const DollsData: ProjectDescription = {
  date: '2019',
  href: 'play/dolls',
  exhibited: 'Work in progress.',
  title: 'dolls',
  images: [
    { src: require('images/projects/dolls/dolls1.png') },
    { src: require('images/projects/dolls/dolls2.png') },
    { src: require('images/projects/dolls/dolls3.png') },
  ],
  headerImage: require('images/projects/dolls/dolls1.png?resize&size=600'),
};

export const PlayData = {
  DollsData,
};

export const PlayDataList = Object.values(PlayData);
