type ProjectTopProps = {
  title: string;
  date: string;
  exhibited?: string | string[];
};
const ProjectTop = ({ title, date, exhibited }: ProjectTopProps) => {
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
      <h2>{title}</h2>
      <div className="date">{date}</div>
      {exhibitedList()}
    </>
  );
};

export { ProjectTop };
