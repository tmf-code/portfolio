import { ProjectDescription } from '../../components/project-description';

export const AlacrityData: ProjectDescription = {
  title: 'alacrity',
  href: 'work/alacrity',

  date: '2019',
  exhibited: 'Post.Digital.Dreams, December-January 2020, Inbetween Conditions, Tbilisi.',
  images: [
    { src: require('images/projects/alacrity/alacrity1.png') },
    { src: require('images/projects/alacrity/alacrity2.png') },
    { src: require('images/projects/alacrity/alacrity3.jpg') },
    { src: require('images/projects/alacrity/alacrity4.jpg') },
    { src: require('images/projects/alacrity/alacrity5.jpg') },
  ],
  headerImage: require('images/projects/alacrity/alacrity1.png'),
};

export const AmbientMatterData: ProjectDescription = {
  title: 'ambient matter',
  href: 'work/ambient-matter',

  date: '2019',
  exhibited: 'Work in Progress.',
  images: [
    { src: require('images/projects/ambient-matter/ambience1.jpg'), caption: 'Image' },
    { src: require('images/projects/ambient-matter/ambience2.jpg'), caption: 'Subject' },
    {
      src: require('images/projects/ambient-matter/ambience3.jpg'),
      caption: 'Not-subject - or, a speculation on machinic ambience',
    },
    { src: require('images/projects/ambient-matter/ambience4.jpg') },
  ],
  headerImage: require('images/projects/ambient-matter/ambience1.jpg'),
};

export const BeepTextData: ProjectDescription = {
  title: 'beep text',
  href: 'work/beep-text',

  date: '2019',
  exhibited: 'Alternate Perspectives coursework, ArtScience, KABK.',
  images: [
    { src: require('images/projects/beep-text/beeptext1.jpg') },
    { src: require('images/projects/beep-text/beeptext2.jpg') },
  ],
  headerImage: require('images/projects/beep-text/beeptext1.jpg'),
};

export const CoastData: ProjectDescription = {
  title: 'the coast was clear',
  href: 'work/coast',

  date: '2019',
  exhibited: 'As We Know It, June 2019, Vondelbunker, Amsterdam.',
  images: [
    { src: require('images/projects/coast/coast1.jpg') },
    { src: require('images/projects/coast/coast2.jpg') },
    { src: require('images/projects/coast/coast3.jpg') },
    { src: require('images/projects/coast/coast4.jpg') },
    { src: require('images/projects/coast/coast5.jpg') },
    { src: require('images/projects/coast/coast6.png') },
  ],
  headerImage: require('images/projects/coast/coast1.jpg'),
};

export const FeedSelfData: ProjectDescription = {
  title: 'feedself',
  href: 'work/feedself',

  date: '2018',
  exhibited: [
    'Common Inn, April 2019, Het Nieuwe Instituut, Rotterdam.',
    'Hacking Nature, June 2018, De Samenscholing, The Hague.',
  ],
  images: [
    { src: require('images/projects/feedself/feedself1.png') },
    {
      src: require('images/projects/feedself/feedself2.jpg'),
      caption: 'Photograph by Franziska Müller Schmidt',
    },
    { src: require('images/projects/feedself/feedself3.jpg') },
    { src: require('images/projects/feedself/feedself4.jpg') },
  ],
  headerImage: require('images/projects/feedself/feedself1.png'),
};

export const GANData: ProjectDescription = {
  title: 'cephalopod crania',
  href: 'work/gan',

  date: '2019',
  exhibited: 'Neural Networks coursework, LIACS, Leiden University.',
  images: [
    { src: require('images/projects/gan/gan1.png') },
    { src: require('images/projects/gan/gan2.jpg') },
    { src: require('images/projects/gan/gan3.jpg') },
  ],
  headerImage: require('images/projects/gan/gan1.png'),
};

export const InterpassivityData: ProjectDescription = {
  title: 'beyond interpassivity',
  href: 'work/interpassivity',
  date: '2018',
  exhibited: 'Time as Matter coursework, ArtScience, KABK',
  images: [{ src: require('images/projects/interpassivity/interpassivity1.jpg') }],
  headerImage: require('images/projects/interpassivity/interpassivity1.jpg'),
};

export const OrdinaryRamblingyData: ProjectDescription = {
  title: 'ordinary rambling',
  href: 'work/ordinary-rambling',

  date: '2018',
  exhibited: [
    'BYOB, September 2018, Nicolaikerk, Utrecht.',
    'Journeys into Diversity, March 2019, Bestuursgebouw, Utrecht University.',
    'Journeys into Diversity, June 2019, Victor J. Koningsbergergebouw, Utrecht University.',
  ],
  images: [
    { src: require('images/projects/ordinary-rambling/ordinary-rambling1.jpg') },
    {
      src: require('images/projects/ordinary-rambling/ordinary-rambling2.jpg'),
      caption: 'Photograph by Maarten Heijer',
    },
    {
      src: require('images/projects/ordinary-rambling/ordinary-rambling3.jpg'),
      caption: 'Photograph by Maarten Heijer',
    },
  ],
  headerImage: require('images/projects/ordinary-rambling/ordinary-rambling1.jpg'),
};

export const TexturesData: ProjectDescription = {
  title: 'temporal textures',
  href: 'work/textures',

  date: '2019',
  exhibited: 'The Four Ecologies coursework, ArtScience, KABK.',
  images: [
    { src: require('images/projects/textures/textures9.png') },
    { src: require('images/projects/textures/textures0.jpg') },
    { src: require('images/projects/textures/textures1.jpg') },
    { src: require('images/projects/textures/textures2.jpg') },
    { src: require('images/projects/textures/textures3.jpg') },
    { src: require('images/projects/textures/textures4.jpg') },
    { src: require('images/projects/textures/textures5.jpg') },
    { src: require('images/projects/textures/textures6.jpg') },
    { src: require('images/projects/textures/textures7.jpg') },
    { src: require('images/projects/textures/textures8.jpg') },
  ],
  headerImage: require('images/projects/textures/textures9.png'),
};

export const WorkDataDict = {
  AlacrityData,
  AmbientMatterData,
  BeepTextData,
  CoastData,
  FeedSelfData,
  GANData,
  InterpassivityData,
  OrdinaryRamblingyData,
  TexturesData,
};

export const WorkDataList = Object.values(WorkDataDict);
