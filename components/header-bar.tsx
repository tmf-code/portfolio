export type HeaderBarProps = {};

export const HeaderBar = (): React.ReactElement<HeaderBarProps> => {
  return <div className="container">{style}</div>;
};

const style = (
  <style jsx>{`
    .container {
    }
  `}</style>
);
