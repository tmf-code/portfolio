export type ProjectImageProps = {
  images: { src: string; alt?: string }[];
};

export const ProjectImages = ({
  images,
}: ProjectImageProps): React.ReactElement<ProjectImageProps> => {
  return <div className="container">{createImages(images)}</div>;
};
const createImages = (images: ProjectImageProps['images']): React.ReactElement => (
  <>
    {images.map((image, index) => (
      <img key={index} src={image.src} alt={image.alt} />
    ))}
  </>
);
