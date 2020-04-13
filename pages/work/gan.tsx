import { Slider } from '../../components/slider';
import { ProjectTop } from '../../components/project-top';
import { GANData } from '../../components/work-data';

const GAN = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...GANData} />
      <Slider {...GANData}></Slider>

      <div className="text">
        <p>
          We built a Deep Convolutional Generative Adversarial Network to experiment with image
          generation. Further testing alternative GAN architecture and the potential of multi-agent
          systems, we made a multi-generator network. Our experiments suggest potential for the
          emergence of unsupervised style divergence.
        </p>
        <p>
          We used the neural network to generate drawings of octopus-skulls, but also trucks or
          Homer Simpson.
        </p>
      </div>
    </div>
  );
};

export default GAN;
