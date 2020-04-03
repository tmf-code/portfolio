import { Slider } from '../../components/slider';
import { Video } from '../../components/video';

const Alacrity = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>alacrity</h2>
      <div className="date">2019</div>
      <div className="exhibited">
        Post.Digital.Dreams, 14 Dec 2019 - 24 Jan 2020, In-between Conditions, Tbilisi.
      </div>

      <Slider
        images={[
          '/images/projects/alacrity/alacrity1.png',
          '/images/projects/alacrity/alacrity2.png',
          '/images/projects/alacrity/alacrity3.jpg',
          '/images/projects/alacrity/alacrity4.jpg',
          '/images/projects/alacrity/alacrity5.jpg',
        ]}
      ></Slider>

      <div className="text">
        <p>
          Alacrity reflects on today’s fast-paced world - the click bait, use-all, catch phrase
          littering self-help blogs and trendy articles. Reportedly things keep moving faster and in
          a straight line. In this world, we strive to “get on top of things”, and get ahead, or at
          least, keep up before we fall behind. Addressing these contemporary conceptions of time,
          the piece probes the interwoven notions of obligation and futility.
        </p>
        <p>
          The work builds on previous research conducted by the artists, in which they structured a
          performative reading on the motif of the ‘beep test’; the school fitness and endurance
          test. Alacrity is an elaboration on their findings, exploring the connections between the
          pace-keeping dimension of technology and time.
        </p>
        <p>
          Presentation of the work was made possible thanks to the{' '}
          <a href={'https://stimuleringsfonds.nl/en'}> Creative Industries Fund NL </a>.
        </p>
      </div>
      <Video srcURL={'https://www.youtube.com/embed/Qy72OkFC7cg'} title={'Alacrity'}></Video>
    </div>
  );
};

export default Alacrity;
