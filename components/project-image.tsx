import styles from '../styles/project-image.module.scss';

type ProjectImageProps = {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
  backgroundFit?: 'cover' | 'contain';
  center?: boolean;
  src: string;
};

export const ProjectImage = ({
  src,
  height = '400px',
  width = '400px',
  backgroundFit,
  center = false,
}: ProjectImageProps) => {
  const containerWidth = center ? '100%' : width;
  const imageWidth = center ? width : '100%';

  return (
    <div
      style={{ width: containerWidth, height: height }}
      className={styles['project-image-container']}
    >
      <div
        style={{
          backgroundImage: `url(${src})`,
          height: '100%',
          width: imageWidth,
          backgroundSize: backgroundFit,
        }}
        className={styles['project-image']}
      ></div>
    </div>
  );
};
