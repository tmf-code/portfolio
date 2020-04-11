import { Slider } from '../../components/slider';
import { Video } from '../../components/video';

const images = [
  { src: require('images/projects/feedself/feedself1.png') },
  {
    src: require('images/projects/feedself/feedself2.jpg'),
    caption: 'Photograph by Franziska Müller Schmidt',
  },
  { src: require('images/projects/feedself/feedself3.jpg') },
  { src: require('images/projects/feedself/feedself4.jpg') },
];

const Feedself = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>feedself</h2>
      <div className="date">2018</div>
      <div className="exhibited">Hacking Nature, 29-30 June 2018, De Samenscholing, The Hague.</div>
      <div className="exhibited">Common Inn, 18 April 2019, Het Nieuwe Instituut, Rotterdam.</div>

      <Slider images={images}></Slider>

      <div className="text">
        <p>
          Feedself explores the concept of ‘feedself’; a speculation borrowing methods of
          contemporary network dynamics. The installation probes the concept through a publication,
          visualisation and soundscape. Using the irony that underlies process(es) of knowledge
          generation, the acclaimed and productive notion of feedback is taken to its extreme. What
          if intervention is removed and feedback perpetuated? The resultant convergence is
          feedself. An infinitely cycling network.
        </p>
      </div>

      <Video srcURL={'https://www.youtube.com/embed/_4VCEmfpmrI'} title={'Feedself'}></Video>
    </div>
  );
};

export default Feedself;
