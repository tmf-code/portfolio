import css from 'styled-jsx/css';

export type ProjectImageProps = {
  images: { src: string; alt?: string }[];
};

export const ProjectImages = ({
  images,
}: ProjectImageProps): React.ReactElement<ProjectImageProps> => {
  return (
    <div className="container">
      {createImages(images, style)}
      <style jsx>{style}</style>
    </div>
  );
};

const style = css`
  .container {
  }
`;

const createImages = (images: ProjectImageProps['images'], style?: string): React.ReactElement => (
  <>
    {images.map((image, index) => (
      <img key={index} src={image.src} alt={image.alt} />
    ))}
    <style jsx>{style}</style>
  </>
);
