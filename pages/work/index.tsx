import { HeaderBarProps } from '../../components/header-bar';
import { style } from '../../styles/project-page-style';

export type ProjectIndexProps = typeof defaultProjectIndexProps & HeaderBarProps;

const defaultProjectIndexProps = {
  projects: [
    { href: 'work/alacrity', text: 'alacrity' },
    { href: 'work/ambient-matter', text: 'ambient Matter' },
    { href: 'work/beeptext', text: 'beeptext' },
    { href: 'work/coast', text: 'the coast was clear' },
    { href: 'work/dolls', text: 'dolls' },
    { href: 'work/feedself', text: 'feedself' },
    { href: 'work/gan', text: 'generative adversarial networks' },
    { href: 'work/interpassivity', text: 'interpassivity' },
    { href: 'work/ordinary-rambling', text: 'ordinary rambling' },
    { href: 'work/textures', text: 'textures' },
  ],
};

const ProjectIndex = ({ projects }: ProjectIndexProps): React.ReactElement => {
  const list = (
    <ul>
      <style jsx>{style}</style>
      {projects.map((project, index) => (
        <li key={index}>
          <a href={project.href}>{project.text}</a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="container">
      <h2>Work</h2>
      {list}
      <style jsx>{style}</style>
    </div>
  );
};

ProjectIndex.defaultProps = defaultProjectIndexProps;

export default ProjectIndex;
