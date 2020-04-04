import { Slider } from '../../components/slider';

const Dolls = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>dolls</h2>
      <div className="date">2019</div>
      <div className="exhibited">Work in progress</div>

      <Slider
        images={[
          require('images/projects/dolls/dolls1.png'),
          require('images/projects/dolls/dolls2.png'),
          require('images/projects/dolls/dolls3.png'),
        ]}
      ></Slider>

      <div className="text">
        <p>Play.</p>
      </div>
    </div>
  );
};

export default Dolls;
