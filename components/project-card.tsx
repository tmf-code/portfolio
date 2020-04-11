type ProjectCardProps = {
  title: string;
  href: string;
  imgSrc: string;
  exhibited?: string | string[];
};
const ProjectCard = ({ title, href, imgSrc, exhibited }: ProjectCardProps) => {
  const exhibitedList = () => {
    if (exhibited === undefined) return null;
    const exhibitedList = exhibited instanceof Array ? exhibited : [exhibited];

    return exhibitedList.map((exhibitedText, index) => (
      <div key={index} className="exhibited">
        {exhibitedText}
      </div>
    ));
  };
  return (
    <>
      <div className="projectItem">
        <div className="headerImage">
          <img src={imgSrc} width="100%" alt={title} />
        </div>
        <div className="headerInfo">
          <a className="project-list" href={href}>
            {title}
          </a>
          {exhibitedList()}
        </div>
      </div>
    </>
  );
};

export { ProjectCard };
