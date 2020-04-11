/* eslint-disable react/prop-types */
import { HeaderBarProps } from '../../components/header-bar';

export type ProjectIndexProps = typeof defaultProjectIndexProps & HeaderBarProps;

const defaultProjectIndexProps = {
  projects: [
    {
      href: 'work/alacrity',
      text: 'alacrity',
      year: '2019',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/ambient-matter',
      text: 'ambient matter',
      year: '2019',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/beep-text',
      text: 'beep text',
      year: '2019',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/coast',
      text: 'the coast was clear',
      year: '2019',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/feedself',
      text: 'feedself',
      year: '2018',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/gan',
      text: 'generative adversarial networks',
      year: '2019',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/interpassivity',
      text: 'beyond interpassivity',
      year: '2018',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/ordinary-rambling',
      text: 'ordinary rambling',
      year: '2018',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
    {
      href: 'work/textures',
      text: 'temporal textures',
      year: '2019',
      imgURL: require('images/projects/alacrity/alacrity1.png'),
    },
  ],
};

const ProjectIndex = ({ projects }: ProjectIndexProps): React.ReactElement => {
  const list = (projects: ProjectIndexProps['projects']) => (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <img src={project.imgURL} width="50%" alt={project.text} />
          {/* <ProjectImage src={project.imgURL} width="100%" height="1000px"></ProjectImage> */}
          <a className="project-list" href={project.href}>
            {project.text}
          </a>
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
