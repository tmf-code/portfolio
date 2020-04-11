import { Slider } from '../../components/slider';
import { ProjectTop } from '../../components/project-top';
import { DollsData } from '../work/work-data';

const Dolls = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...DollsData} />
      <Slider {...DollsData}></Slider>

      <div className="text">
        <p>Play.</p>
      </div>
    </div>
  );
};

export default Dolls;
