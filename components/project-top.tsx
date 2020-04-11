type ProjectTopProps = {
  title: string;
  date: string;
  exhibited?: string;
};
const ProjectTop = ({ title, date, exhibited }: ProjectTopProps) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="date">{date}</div>
      {exhibited && <div className="exhibited">{exhibited}</div>}
    </>
  );
};

export { ProjectTop };
