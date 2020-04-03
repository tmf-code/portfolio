import { Slider } from '../../components/slider';

const AmbientMatter = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>ambient matter</h2>
      <div className="date">2019</div>
      <div className="exhibited">Work in Progress </div>
      <div className="text">
        As technologies like machine vision begin doing some of our perception for us, we find it
        relevant to investigate things they (and by extension us) deem unimportant. Things that are
        not rewarded during training. Task-oriented at their core, ambience is uninteresting to a
        learned machine. In our work, we turn to this ambient matter.
      </div>
      <Slider
        images={[
          '/images/projects/ambient-matter/ambience1.jpg',
          '/images/projects/ambient-matter/ambience2.jpg',
          '/images/projects/ambient-matter/ambience3.jpg',
          '/images/projects/ambient-matter/ambience4.jpg',
        ]}
      ></Slider>

      <div className="text">
        <h4>Background</h4>
        <p>
          Our experiences are filled with ambience, through space and time; the not-subject of our
          perception. Padding, noise, a backdrop, the in-between and around. The (im)material that
          we pay no attention to. Yet without it, our experiences and perspectives of the world
          would be very different. We understand ambience as the ‘not-subject’. It has no edges, a
          non-bounded spatio-temporal meshwork. A temporal texture that invokes infinity, slipping
          by unquestioned. This understanding may be tricky as any time we turn our attention to it,
          it turns subject. Just like the Kantian subject requires synthesis by a priori concepts,
          it is put in a container. And with this it transforms, as others fill the ambience.
        </p>
        <h4>‘Get to the point, cut the crap’</h4>
        <p>
          If efficiency, progress and production guide the modern-day status quo, ambience is a
          vacancy waiting to be used. In these terms, it’s no more than waste. A waste of space, a
          waste of time. Through machines we push this excess out of mind. By their nature machinic
          tasks require a subject. But how about the excess? What use is ambience to machines? How
          could ambience be intensified, and still remain on the mind’s peripherals?
        </p>
      </div>
    </div>
  );
};

export default AmbientMatter;
