const About = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>about</h2>

      <div className="text">
        <p>
          TMF is an Amsterdam/Berlin based art-research duo made up of{' '}
          <a href="/">Alexandra Barancová</a> and{' '}
          <a href="https://honga1.github.io/personal-portfolio/">Jae Perris</a>. Their work explores
          meanings of value in today’s technoscapes with a particular interest in nonhuman
          interlocutors. Their main research themes include narratives of the Anthropocene, concepts
          of Self, artificial intelligence(s), and machinic aesthetics.
        </p>
        <p>
          Their works have taken the form of video essays, audiovisual installations, art games, and
          text. They have exhibited at museums, media art platforms and research institutes,
          including for example Het Nieuwe Instituut (NL), The Haus der Kulturen der Welt (DE),
          Utrecht University (NL), and In-Between Conditions (GE).
        </p>
        <p>
          The duo have backgrounds in VR/AR, computational creativity, artificial intelligence,
          media technology, the politics of memory, (science) fiction, and critical theory.
        </p>
      </div>
    </div>
  );
};

export default About;
