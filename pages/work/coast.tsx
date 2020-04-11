import { Slider } from '../../components/slider';
import { Video } from '../../components/video';

const images = [
  { src: require('images/projects/coast/coast1.jpg') },
  { src: require('images/projects/coast/coast2.jpg') },
  { src: require('images/projects/coast/coast3.jpg') },
  { src: require('images/projects/coast/coast4.jpg') },
  { src: require('images/projects/coast/coast5.jpg') },
  { src: require('images/projects/coast/coast6.png') },
];
const Coast = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>the coast was clear</h2>
      <div className="date">2019</div>
      <div className="exhibited">As We Know It, 29-30 June 2019, Vondelbunker, Amsterdam.</div>

      <div className="text">
        <p>
          We think back of the days when the foams stayed at shore. What’s left of a boundary when
          it occupies more space than the zones it divides?
        </p>
        <p>
          Finding ourselves living on the motherfoam’s volatile periphery, we can no longer rely on
          the steady shorelines inscribed in our cartographic memory. Her swelling edges move
          further beyond our line of sight.
        </p>
      </div>

      <Slider images={images}></Slider>

      <div className="text">
        <blockquote cite="">
          “Stillborn, emerging and drowned terrestrial insects progressively accumulated within foam
          lines, trapped and held in place by the surface tension of the bubbles within. These dense
          foam lines restrict the penetration of sunlight. The land beneath is left infertile.”
        </blockquote>
        <p>
          The foams are always coming, they’re not going. They haven’t gone and where would they go?
          We assume the land we are on is surrounded by water. Only memories remember a land where
          the coast is clear.
        </p>
        <h4>Boundaries: a boundary is a face</h4>
        <p>
          Once a shape. A contour, a modestly contained accessory of the seas. The cute fluff on old
          holiday photographs. A volume so negligible it could bother nobody, unobtrusive. It
          outlined the then most obvious division between land and waters. Solids and liquids after
          all tend to separate seamlessly.
        </p>
        <p>
          As the stretches gained width, we lost sight of the far edges. Swollen boundaries are
          difficult to navigate. We no longer have access to land trapped beyond the edge. And the
          edge is subject to the will of the wind. Living on a volatile periphery. It was a solution
          to the spills they said, only later to add the premises. Just an edge with no end, in any
          direction.
        </p>
        <p>What’s left of a boundary when it occupies more space than the zones it divides?</p>
        <h4>Textures: repetition evokes infinity.</h4>
        <p>
          Having neighbours stretches space. Tension between the bubbles keeps them all afloat. Back
          to back, side to side. Touching curved edges. Like a highrise building too close to your
          window, it’s just a texture. Repetition with edges out of sight; the foam is not discrete.
        </p>
        <p>
          A foam is a multi-scale system. The bubbles seem static, but tension keeps them in
          constant flow. Discrete pockets form three-dimensional tessellations. Films can break
          under disjoining pressure. These effects rearrange the foam at scales unknown to the
          bubbles, which may be individual or collective, fracturing, or concatenating masses.
        </p>
        <p>
          They say the density and viscosity of the gas can be neglected in predicting the velocity
          of the foams. Yet the air-filled containers constitute the moving mass. Repetition in the
          wind, with the wind, to the wind.
        </p>
        <h4>Mother Foam / Fertility</h4>
        <p>
          Spread wide, but out of sight. A source of contamination, or arbitration on the land. The
          motherfoam decides our movements. Her children extending from, but not of her, whisper
          across the land. Enveloping and consuming our carelessness she is the profound dignation
          of the whole.
        </p>
        <p>
          When she sends her envoys from the ocean we see ourselves in them. One two, exploding,
          pustules. A wall of more. A horizon of more. Reflections, refractions, a mirror without an
          edge. If we knew the edges we could find a pattern. The little ones don’t stop. Coming
          forth, zooming, accumulating, hiding and entrenching. But when the herd moves the mother’s
          fertility is the lands desolation.
        </p>
        <h4>Animation / Discretion</h4>
        <p>
          On the good days, when the ground is steady, and we are high enough, we can afford to play
          with our captors. We’ll throw or kick the discrete chunks, the litter of the mother foam.
          Smell the captured mass as it decays in the pores, feel the grease and sand, and feel glee
          in it’s unthreatening nature. You’d almost consider them friendly, the compact foams
          rolling curiously to your door. They split and reconnect again - fleeting individuals,
          infinitely divisible and reviseable. Only temporarily exclusive, but unquestionably
          animated.
        </p>
        <h4>Individuals: Individualism is not the way forward</h4>
        <p>
          Foams start from an individual bubble. Voids wrapped in skin. Add more, a population, more
          voids, tesselating edges, expanding and supportive. Now the individuals can be lost within
          the dense foam lines. Dense enough the dangers of light, heat, and the drying air are
          protected from population.
        </p>
        <p>
          They were the ideal solution. Where air met our excess it was churned and frothed.
          Carefully choosing the ratio of bacteria we swelled the mass. When it self sustained we
          applauded. Now we’re either one bubble. Or we’re consumed by the foam.
        </p>
        <p>We meet discrete chunks, the litter of the motherfoam.</p>
        <h4>Don’t fight the wind</h4>
        <p>
          I remember more birds. Or stories of more. Gliding creatures once signatories of the
          ocean, now omens of our fate. We find them wrapped up in the hungry fluff. With so few
          places left to land the foams soap these beasts wet. Their feathers become too heavy, and
          their bodies too cold. They sink into the carnivorous entities. When the wind moves the
          foam, we don’t fight the wind.
        </p>
      </div>

      <Video srcURL={'https://www.youtube.com/embed/LBrnuKq1AyA'} title={'Foams'}></Video>
    </div>
  );
};

export default Coast;
