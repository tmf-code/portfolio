import css from 'styled-jsx/css';
import { HeaderBarProps } from '../../components/header-bar';

export type ProjectIndexProps = typeof defaultProjectIndexProps & HeaderBarProps;

const defaultProjectIndexProps = {
  projects: [
    { href: 'projects/alacrity', text: 'Alacrity' },
    { href: 'projects/ambientmatter', text: 'Ambient Matter' },
    { href: 'projects/beeptext', text: 'Beep Text' },
    { href: 'projects/coast', text: 'The Coast was Clear' },
    { href: 'projects/dolls', text: 'Dolls' },
    { href: 'projects/feedself', text: 'Feedself' },
    { href: 'projects/gan', text: 'Generative Adversarial Networks' },
    { href: 'projects/interpassivity', text: 'Interpassivity' },
    { href: 'projects/ordinaryrambling', text: 'Ordinary Rambling' },
    { href: 'projects/textures', text: 'Textures' },
  ],
};

const ProjectIndex = ({ projects }: ProjectIndexProps): React.ReactElement => {
  const list = (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <a href={project.href}>{project.text}</a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="container">
      {list}
      <style jsx>{style}</style>
    </div>
  );
};

ProjectIndex.defaultProps = defaultProjectIndexProps;

const style = css`
  .container {
  }
`;

export default ProjectIndex;
