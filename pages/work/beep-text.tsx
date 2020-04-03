import { Slider } from '../../components/slider';

const Beeptext = (): React.ReactElement => {
  return (
    <div className="container">
      <h2>beep text</h2>
      <div className="date">2019</div>
      <div className="exhibited">Alternate Perspectives coursework, ArtScience, KABK.</div>

      <div className="text">
        <blockquote>
          In this fast-paced world…
          <ul style={{ listStyleType: 'none' }}>
            <li>Accomplish ever-greater convenience through truly efficient means,</li>
            <li>Reserve two hours every three days to go through your emails,</li>
            <li>Meditate for 20 minutes a day to double your efficiency,</li>
            <li>Keep up with the latest trends, but only in the morning,</li>
            <li>Make lists to increase your productivity,</li>
            <li>Reach goals,</li>
            <li>Set targets,</li>
            <li>Get ahead,</li>
            <li>Multi-task,</li>
            <li>Keep up.</li>
          </ul>
        </blockquote>
      </div>

      <Slider
        images={[
          '/images/projects/beep-text/beeptext1.jpg',
          '/images/projects/beep-text/beeptext2.jpg',
        ]}
      ></Slider>

      <div className="text">
        <p>
          With Beep text we think through contemporary conceptions of time. Reportedly things keep
          moving faster and in a straight line. Start to finish, we learn to get better faster.
        </p>
        <p>
          The project structures a performative reading on the motif of the ‘beep test’; the school
          fitness and endurance test. We invite two people to read a text collaboratively, one line
          at a time. A beep signals for the second of the pair to begin reading. The intervals
          between beeps get progressively shorter.
        </p>
      </div>
    </div>
  );
};

export default Beeptext;
