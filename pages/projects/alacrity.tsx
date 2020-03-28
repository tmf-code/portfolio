import css from 'styled-jsx/css';
import { ProjectImages } from '../../components/project-image';

const Alacrity = (): React.ReactElement => {
  return (
    <div className="container">
      <style jsx>{style}</style>
      <h2>alacrity</h2>
      <div className="date">2019</div>
      <div className="exhibited">
        Post.Digital.Dreams, 14 Dec 2019 - 24 Jan 2020, In-between Conditions, Tbilisi.
      </div>
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
        Presentation of the work was made possible thanks to the{' '}
        <a href={'https://stimuleringsfonds.nl/en'}> Creative Industries Fund NL </a>.
      </div>
      <ProjectImages images={[{ src: '/images/projects/alacrity/alacrity1.png' }]}></ProjectImages>
    </div>
  );
};

const style = css`
  .container {
    padding-left: 4%;
    padding-right: 4%;
    width: 100%;
    color: black;
    font-family: sans-serif;
    font-size: 20px;
    text-align: justify;
  }

  p {
    margin-bottom: 1em;
  }

  ::selection {
    background: inherit;
    color: turquoise;
  }

  h2 {
    font-style: bold;
  }

  .date,
  .exhibited {
    font-size: 22px;
    margin-bottom: 1em;
  }

  .exhibited {
    font-style: italic;
  }

  a {
    text-decoration: none;
    color: orange;
  }

  a:hover,
  a:hover::selection {
    color: pink;
  }

  a::selection {
    color: green;
  }
`;

export default Alacrity;
