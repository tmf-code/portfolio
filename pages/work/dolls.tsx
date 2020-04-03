import { SimpleSlider } from '../../components/simple-slider';
import { style } from '../../styles/project-page-style';

const Dolls = (): React.ReactElement => {
  return (
    <div className="container">
      <style jsx>{style}</style>
      <h2>dolls</h2>
      <div className="date">2019</div>
      <div className="exhibited">Work in progress</div>

      <SimpleSlider
        images={[
          '/images/projects/dolls/dolls1.png',
          '/images/projects/dolls/dolls2.png',
          '/images/projects/dolls/dolls3.png',
        ]}
      ></SimpleSlider>

      <div className="text">
        <p>Play.</p>
      </div>
    </div>
  );
};

export default Dolls;
