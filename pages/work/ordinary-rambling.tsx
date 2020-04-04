import { Slider } from '../../components/slider';
import { Video } from '../../components/video';

const OrdinaryRambling = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>ordinary rambling</h2>
      <div className="date">2018</div>
      <div className="exhibited">BYOB, 29 September 2018, Nicolaikerk, Utrecht.</div>
      <div className="exhibited">
        Journeys into Diversity, March 2019, Bestuursgebouw, Utrecht University.
      </div>
      <div className="exhibited">
        Journeys into Diversity, June 2019, Victor J. Koningsbergergebouw, Utrecht University.
      </div>

      <Slider
        images={[
          require('images/projects/ordinary-rambling/ordinary-rambling1.jpg'),
          require('images/projects/ordinary-rambling/ordinary-rambling2.jpg'),
          require('images/projects/ordinary-rambling/ordinary-rambling3.jpg'),
        ]}
      ></Slider>

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
      <div className="footnote">Photographs by Maarten Heijer.</div>

      <Video srcURL={'https://www.youtube.com/embed/5P27VCzvbq8'} title={'Feedself'}></Video>
    </div>
  );
};

export default OrdinaryRambling;
