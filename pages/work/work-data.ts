import { ProjectDescription } from '../../components/project-description';

export const AlacrityData: ProjectDescription = {
  date: '2019',
  exhibited: 'Post.Digital.Dreams, 14 Dec 2019 - 24 Jan 2020, In-between Conditions, Tbilisi.',
  title: 'alacrity',
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
  date: '2019',
  exhibited: 'Work in Progress.',
  title: 'ambient matter',
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
  date: '2019',
  exhibited: 'Alternate Perspectives coursework, ArtScience, KABK.',
  title: 'beep text',
  images: [
    { src: require('images/projects/beep-text/beeptext1.jpg') },
    { src: require('images/projects/beep-text/beeptext2.jpg') },
  ],
  headerImage: require('images/projects/beep-text/beeptext1.jpg'),
};

export const CoastData: ProjectDescription = {
  date: '2019',
  exhibited: 'As We Know It, 29-30 June 2019, Vondelbunker, Amsterdam.',
  title: 'the coast was clear',
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
  date: '2018',
  exhibited: [
    'Common Inn, 18 April 2019, Het Nieuwe Instituut, Rotterdam.',
    'Hacking Nature, 29-30 June 2018, De Samenscholing, The Hague.',
  ],
  title: 'feedself',
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
  date: '2019',
  exhibited: 'Neural Networks coursework, LIACS, Leiden University.',
  title: 'cephalopod crania',
  images: [
    { src: require('images/projects/gan/gan1.png') },
    { src: require('images/projects/gan/gan2.jpg') },
    { src: require('images/projects/gan/gan3.jpg') },
  ],
  headerImage: require('images/projects/gan/gan1.png'),
};

export const InterpassivityData: ProjectDescription = {
  date: '2018',
  exhibited: 'Time as Matter coursework, ArtScience, KABK',
  title: 'beyond interpassivity',
  images: [{ src: require('images/projects/interpassivity/interpassivity1.jpg') }],
  headerImage: require('images/projects/interpassivity/interpassivity1.jpg'),
};

export const OrdinaryRamblingyData: ProjectDescription = {
  date: '2018',
  exhibited: [
    'BYOB, 29 September 2018, Nicolaikerk, Utrecht.',
    'Journeys into Diversity, March 2019, Bestuursgebouw, Utrecht University.',
    'Journeys into Diversity, June 2019, Victor J. Koningsbergergebouw, Utrecht University.',
  ],
  title: 'ordinary rambling',
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
  date: '2019',
  exhibited: 'The Four Ecologies coursework, ArtScience, KABK.',
  title: 'temporal textures',
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

export const DollsData: ProjectDescription = {
  date: '2019',
  exhibited: 'Work in progress.',
  title: 'dolls',
  images: [
    { src: require('images/projects/dolls/dolls1.png') },
    { src: require('images/projects/dolls/dolls2.png') },
    { src: require('images/projects/dolls/dolls3.png') },
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
