import { WorkDataList } from '../../components/work-data';
import { ProjectCard } from '../../components/project-card';

const ProjectIndex = (): React.ReactElement => {
  const projects = WorkDataList;

  const list = (projects: typeof WorkDataList) => (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <ProjectCard
            title={project.title}
            href={project.href}
            imgSrc={project.headerImage}
            exhibited={project.exhibited}
          />
        </li>
      ))}
    </ul>
  );
  const years = projects.map(project => project.date);
  const uniqueYears = Array.from(new Set(years)).sort().reverse();

  return (
    <div className="container">
      {uniqueYears.map((selectedYear, index) => {
        return (
          <div key={index}>
            <h2> {selectedYear} </h2>
            {list(projects.filter(project => project.date === selectedYear))}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectIndex;
