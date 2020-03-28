export type TemplateProps = {};

export const Template = (): React.ReactElement<TemplateProps> => {
  return <div className="container">{style}</div>;
};

const style = (
  <style jsx>{`
    .container {
    }
  `}</style>
);
