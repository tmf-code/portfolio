import styles from '../styles/project-image.module.scss';

type ProjectImageProps = {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  backgroundFit?: 'cover' | 'contain';
  center?: boolean;
  src: string | string[];
};

export const ProjectImage = ({
  src,
  height = '400px',
  width = '400px',
  backgroundFit,
  center = false,
}: ProjectImageProps) => {
  // Multiple images stack side by side
  const sources = Array.isArray(src) ? src : [src];
  const containerWidth = center ? '100%' : width;
  const imageWidth = center ? width : '100%';

  return (
    <div
      style={{ width: containerWidth, height: height }}
      className={styles['project-image-container']}
    >
      {sources.map((source, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${source})`,
            height: '100%',
            width: imageWidth,
            backgroundSize: backgroundFit,
          }}
          className={styles['project-image']}
        ></div>
      ))}
    </div>
  );
};
