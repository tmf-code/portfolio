import { HeaderBarProps } from '../../components/header-bar';

export type ProjectIndexProps = typeof defaultProjectIndexProps & HeaderBarProps;

const defaultProjectIndexProps = {
  projects: [
    { href: 'work/alacrity', text: 'alacrity' },
    { href: 'work/ambient-matter', text: 'ambient matter' },
    { href: 'work/beep-text', text: 'beep text' },
    { href: 'work/coast', text: 'the coast was clear' },
    { href: 'work/feedself', text: 'feedself' },
    { href: 'work/gan', text: 'generative adversarial networks' },
    { href: 'work/interpassivity', text: 'beyond interpassivity' },
    { href: 'work/ordinary-rambling', text: 'ordinary rambling' },
    { href: 'work/textures', text: 'temporal textures' },
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
      <h2>2019</h2>
      {list}
    </div>
  );
};

ProjectIndex.defaultProps = defaultProjectIndexProps;

export default ProjectIndex;
