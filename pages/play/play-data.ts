import { ProjectDescription } from '../../components/project-description';

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
  headerImage: require('images/projects/textures/textures9.png'),
};

export const PlayData = {
  DollsData,
};
