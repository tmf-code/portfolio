import { Slider } from '../../components/slider';
import { Video } from '../../components/video';
import { OrdinaryRamblingyData } from './work-data';
import { ProjectTop } from '../../components/project-top';

const OrdinaryRambling = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...OrdinaryRamblingyData} />
      <Slider {...OrdinaryRamblingyData}></Slider>

      <div className="text">
        <p>
          Travel carries connotations of enlightenment. It is seen as integral to personal
          development. But we find substance to challenge such an ideal. Why are professions in
          transport not much more desirable? How is it that Immanuel Kant barely left his hometown,
          but still managed to come up with enlightening ideas? We reflect on our intuition that the
          destination generally overshadows the journey, even though ‘travelling’ refers to an
          activity.
        </p>
      </div>

      <Video srcURL={'https://www.youtube.com/embed/5P27VCzvbq8'} title={'Feedself'}></Video>
    </div>
  );
};

export default OrdinaryRambling;
