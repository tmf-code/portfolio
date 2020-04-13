import { Slider } from '../../components/slider';
import { Video } from '../../components/video';
import { ProjectTop } from '../../components/project-top';
import { AlacrityData } from '../../components/work-data';

const Alacrity = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...AlacrityData} />
      <Slider {...AlacrityData}></Slider>

      <div className="text">
        <p>
          Alacrity reflects on today’s fast-paced world - the click bait, use-all, catch phrase
          littering self-help blogs and trendy articles. Reportedly things keep moving faster and in
          a straight line. In this world, we strive to “get on top of things”, and get ahead, or at
          least, keep up before we fall behind. Addressing these contemporary conceptions of time,
          the piece probes the interwoven notions of obligation and futility.
        </p>
        <p>
          The work builds on <a href="/work/beep-text">previous research</a> conducted by the
          artists, in which they structured a performative reading on the motif of the ‘beep test’;
          the school fitness and endurance test. Alacrity is an elaboration on their findings,
          exploring the connections between the pace-keeping dimension of technology and time.
        </p>
        <p>
          Presentation of the work was made possible thanks to the{' '}
          <a href={'https://stimuleringsfonds.nl/en'}> Creative Industries Fund NL </a>.
        </p>
      </div>
      <Video srcURL={'https://www.youtube.com/embed/Qy72OkFC7cg'} title={'Alacrity'}></Video>
      <Video srcURL={'https://www.youtube.com/embed/BsGREhdPSvY'} title={'Alacrity'}></Video>
      <p>
        <a href="https://stimuleringsfonds.nl/en/">
          <img src={require('images/fund-logo.jpg')} width="30%" alt="fund-logo" />
        </a>
      </p>
    </div>
  );
};

export default Alacrity;
