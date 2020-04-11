import { WorkDataList } from './work-data';

const ProjectIndex = (): React.ReactElement => {
  const projects = WorkDataList;

  const list = (projects: typeof WorkDataList) => (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <div className="projectItem">
            <div className="headerImage">
              <img src={project.headerImage} width="100%" alt={project.title} />
            </div>
            <div className="headerInfo">
              <a className="project-list" href={project.href}>
                {project.title}
              </a>
              {project.exhibited && <p className="description">{project.exhibited}</p>}
            </div>
          </div>
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
