import { HeaderBarProps } from '../../components/header-bar';

export type ProjectIndexProps = typeof defaultProjectIndexProps & HeaderBarProps;

const defaultProjectIndexProps = {
  projects: [{ href: 'play/dolls', text: 'dolls' }],
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
      <h2>play</h2>
      {list}
    </div>
  );
};

ProjectIndex.defaultProps = defaultProjectIndexProps;

export default ProjectIndex;
