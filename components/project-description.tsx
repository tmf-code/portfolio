export type ProjectDescriptionProps = {};

export const ProjectDescription = (): React.ReactElement<ProjectDescriptionProps> => {
  return <div className="container">{style}</div>;
};

const style = (
  <style jsx>{`
    .container {
    }
  `}</style>
);
