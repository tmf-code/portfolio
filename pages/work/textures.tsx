import { Slider } from '../../components/slider';
import { Video } from '../../components/video';
import { ProjectTop } from '../../components/project-top';
import { TexturesData } from '../../components/work-data';

const Textures = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...TexturesData} />
      <Slider {...TexturesData}></Slider>

      <div className="text">
        <p>
          We use the concept of texture to think about humans’ relation to their surroundings.
          Continuous, textures suggest endless repetition; a false promise of infinitude. Glimpses
          of our environment have textural qualities.
        </p>
        <p>
          Texture: a repetition at any level; in any dimension and in time. This is why we add
          ‘temporal’.
        </p>
        <p>
          As such we can perceive discrete elements of the world as temporal textures. A 30 by 30
          centimeter quadrant of sand is repeated countless times to make up the desert. A chicken
          is cloned millions of times to stock the chicken farms. The nodes in a neural network are
          continuously tweaked to let the system ‘learn’.
        </p>
        <p>
          Texture: a finite entity creating the illusion/ serving as a temporary embodiment of
          infinity.
        </p>
        <p>
          The assumption of texturality implies ignorance to bounds. It is a material parallel to
          ambience; that which surrounds, fills space-time, but can only be foregrounded by paradox.
          Matter, whether physical or of concern, becomes material in the presence of mind. Any
          attempt at texture is an attempt at materialism. A desire to see and have infinitude.
          Another go at finding a tangible encounter with the so-called sublime.
        </p>
        <p>
          We propose the concept of temporal textures as an analytical tool to relate (to) our
          surroundings. Extending Guattari’s (1989) three ecologies – the material environment,
          social relations and the subjective experience – to the nonhuman realm, we see the
          potential for texture as an overarching commonality.
        </p>
      </div>

      <Video srcURL={'https://www.youtube.com/embed/D7jje7Lrfoc'} title={'Feedself'}></Video>
    </div>
  );
};

export default Textures;
