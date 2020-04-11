import { Slider } from '../../components/slider';

const images = [
  { src: require('images/projects/gan/gan1.png') },
  { src: require('images/projects/gan/gan2.jpg') },
  { src: require('images/projects/gan/gan3.jpg') },
];
const GAN = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>cephalopod crania</h2>
      <div className="date">2019</div>
      <div className="exhibited">Neural Networks coursework, LIACS, Leiden University.</div>

      <Slider images={images}></Slider>

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
