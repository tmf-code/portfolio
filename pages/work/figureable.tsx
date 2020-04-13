import { Slider } from '../../components/slider';
import { ProjectTop } from '../../components/project-top';
import { FigureableData } from '../../components/work-data';

const Figureable = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...FigureableData} />
      <Slider {...FigureableData}></Slider>

      <div className="text">
        <p>More and more people create and use a digital body on a regular basis.</p>{' '}
        <p>
          {' '}
          Figureable explores our relationships to and with bodies through embodiment in games; what
          if it isn’t your (virtual) body changing the environment, but rather your own body being
          altered in its course? And what if this body changes in ways you do not find desirable?{' '}
        </p>
        <p>
          This research project is geared towards the development of a video game engaging with the
          themes of body, environment and control. The core concept for the end game is a virtual
          environment in which players need to sacrifice their own limbs to succeed. The project
          team consists of Alexandra Barancová, Jae Perris and Roel Wouters (Studio Moniker).
        </p>
        <p>
          For more information, visit our project website and blog{' '}
          <a href={'https://figureable.netlify.com/'}> here </a>.
        </p>
        <p>
          The project is funded by the{' '}
          <a href={'https://stimuleringsfonds.nl/en'}> Creative Industries Fund NL </a>.
        </p>
        <p>
          <a href="https://stimuleringsfonds.nl/en/">
            <img
              src={require('images/projects/figureable/fund-logo.jpg')}
              width="15%"
              alt="fund-logo"
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Figureable;
