export type FooterBarProps = {};

export const FooterBar = (): React.ReactElement<FooterBarProps> => {
  return <div className="container">{style}</div>;
};

const style = (
  <style jsx>{`
    .container {
    }
  `}</style>
);
