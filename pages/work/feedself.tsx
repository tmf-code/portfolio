import { Slider } from '../../components/slider';
import { Video } from '../../components/video';
import { FeedSelfData } from '../../components/work-data';
import { ProjectTop } from '../../components/project-top';

const Feedself = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...FeedSelfData} />
      <Slider {...FeedSelfData}></Slider>

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
