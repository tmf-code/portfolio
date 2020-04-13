import { Slider } from '../../components/slider';
import { ProjectTop } from '../../components/project-top';
import { Video } from '../../components/video';
import { ArcticTreeData } from '../../components/work-data';

const ArcticTree = (): React.ReactElement => {
  return (
    <div className="container">
      <ProjectTop {...ArcticTreeData} />
      <Slider {...ArcticTreeData}></Slider>

      <div className="text">
        <p>
          As a part of the{' '}
          <a href={'https://archiveprogram.github.com/'}> GitHub Archive Program </a>, GitHub
          archived a snapshot of all its active repositories in the GitHub Arctic Code Vault at the
          beginning of February 2020. GitHub&apos;s Vault forms a part of the{' '}
          <a href={'https://www.arcticworldarchive.org/'}> Arctic World Archive </a>, in which the
          stored data and repositories should last for at least 1000 years to come.
        </p>
        <p>
          We plant a tree amidst this snapshot. In a future where a git branch may be more palpable
          than a tree branch, we suggest and preserve a method for their propagation. A method that
          is modelled on the tree structure of git, and is accessible for anyone with internet
          and/or vault access to clone. Requiring less than 1.5KB of memory, the efficiency of this
          method as a means to reforestation speaks for itself.
        </p>
        <p>
          The GitHub repository for Arctic Tree can be found{' '}
          <a href={'https://github.com/tmf-code/arctic-tree'}> here </a>. You are welcome to grow
          your own tree.
        </p>
        {/* <p>
          When the arctic ice has melted and trees have long gone extinct, access to open source
          trees might become important. Perhaps though, the ice on the arctic will be worth
          preserving as companies and nations rely on it to keep their digital memory cool in the
          depths of these slick vaults. Digital technologies become naturalised by sowing their
          seeds deep in the Arctic.
        </p> */}
        <Video
          srcURL={'https://www.youtube.com/embed/fzI9FNjXQ0o'}
          title={'GitHub Arctic Code Vault'}
        ></Video>
      </div>
    </div>
  );
};

export default ArcticTree;
