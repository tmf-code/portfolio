/* eslint-disable react/prop-types */
import { HeaderBarProps } from '../../components/header-bar';

export type ProjectIndexProps = typeof defaultProjectIndexProps & HeaderBarProps;

const defaultProjectIndexProps = {
  projects: [
    { href: 'work/alacrity', text: 'alacrity', year: '2019' },
    { href: 'work/ambient-matter', text: 'ambient matter', year: '2019' },
    { href: 'work/beep-text', text: 'beep text', year: '2019' },
    { href: 'work/coast', text: 'the coast was clear', year: '2019' },
    { href: 'work/feedself', text: 'feedself', year: '2018' },
    { href: 'work/gan', text: 'generative adversarial networks', year: '2019' },
    { href: 'work/interpassivity', text: 'beyond interpassivity', year: '2018' },
    { href: 'work/ordinary-rambling', text: 'ordinary rambling', year: '2018' },
    { href: 'work/textures', text: 'temporal textures', year: '2019' },
  ],
};

const ProjectIndex = ({ projects }: ProjectIndexProps): React.ReactElement => {
  const list = (projects: ProjectIndexProps['projects']) => (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <a href={project.href}>{project.text}</a>
        </li>
      ))}
    </ul>
  );
  const years = projects.map(project => project.year);
  const uniqueYears = Array.from(new Set(years)).sort().reverse();

  return (
    <div className="container">
      {uniqueYears.map((selectedYear, index) => {
        return (
          <div key={index}>
            <h2> {selectedYear} </h2>
            {list(projects.filter(project => project.year === selectedYear))}
          </div>
        );
      })}
    </div>
  );
};

ProjectIndex.defaultProps = defaultProjectIndexProps;

export default ProjectIndex;
