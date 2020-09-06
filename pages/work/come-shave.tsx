import { Slider } from '../../components/slider';
import { ProjectTop } from '../../components/project-top';
import { ComeShaveData } from '../../components/work-data';

const ComeShave = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...ComeShaveData} />
      <Slider {...ComeShaveData}></Slider>

      <div className="text">
        <p>
          <a href="https://comeshave.com">Come Shave With Me</a> is a collaborative web-based work
          that explores the limits of digitally-bound technologies in mediating the bodily aspects
          of sociality. It is a virtual skin that people can groom together, online. As such, the
          work proposes an outlet for social grooming in a time of distancing.
        </p>
        <p>
          With public events and gatherings cut down to an unprecedented minimum around the world,
          bodily self-care is - let’s be honest - not necessarily a top-most priority. Your arms,
          armpits, chest, back, genitals, or legs are (usually) tucked away during video chats and
          conferences after all. What part of it is just for others’ eyes to see and skins to feel?
          What do we make of our physical bodies in isolation? And how do temporalities of bodily
          processes interact with the ‘real-time’ pace of digital media?
        </p>
        <p>
          Bodily processes are an easily overlooked constant to our subjectivity, with the help of
          which we can reflect on a world in flux, like the current pandemic-induced
          transformations. Most people will be able to tell you roughly how much their hair has
          grown since it all started. But the virtual world often has neither the patience, nor the
          infrastructure to accommodate the wants and needs of our bodies. Come Shave With Me
          speculates whether the satisfactions enjoyed from bodily grooming could be recreated and
          shared in virtual spaces. At the same time, it is a reminder of all the bodies sitting
          behind the screens.
        </p>
        <p>
          This work is an outcome of <a href="work/figureable">Figureable</a>, an artistic research
          project funded by the{' '}
          <a href={'https://stimuleringsfonds.nl/en'}> Creative Industries Fund NL </a>.
        </p>
      </div>
      <p>
        <a href="https://stimuleringsfonds.nl/en/">
          <img src={require('images/fund-logo.jpg')} width="30%" alt="fund-logo" />
        </a>
      </p>
    </div>
  );
};

export default ComeShave;
