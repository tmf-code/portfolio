import styles from '../styles/project-card.module.scss';

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
      <div key={index} className={styles['project-exhibited']}>
        {exhibitedText}
      </div>
    ));
  };
  return (
    <div className={styles['project-card']}>
      <div className={styles['project-image']}>
        <a href={href}>
          <img src={imgSrc} width="100%" alt={title} />
        </a>
      </div>
      <div className={styles['project-text']}>
        <a className={styles['project-title']} href={href}>
          {title}
        </a>
        {exhibitedList()}
      </div>
    </div>
  );
};

export { ProjectCard };
