export type ProjectImageProps = {};

export const ProjectImage = (): React.ReactElement<ProjectImageProps> => {
  return <div className="container">{style}</div>;
};

const style = (
  <style jsx>{`
    .container {
    }
  `}</style>
);
