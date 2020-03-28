import css from 'styled-jsx/css';

export type HeaderBarProps = typeof defaultHeaderBarProps;

const defaultHeaderBarProps = {
  leftLinks: [
    <a key={0} href="/">
      Home
    </a>,
    <a key={1} href="/projects">
      Work
    </a>,
    <a key={2} href="/about">
      About
    </a>,
  ],
  rightLinks: [
    <a key={0} href="/">
      Home
    </a>,
    <a key={1} href="/projects">
      Work
    </a>,
    <a key={2} href="/about">
      About
    </a>,
  ],
};

export const HeaderBar = ({ leftLinks, rightLinks }: HeaderBarProps): React.ReactElement => {
  return (
    <div className="container">
      <div className="left-links">{leftLinks}</div>
      <div className="right-links">{rightLinks}</div>
      <style jsx>{style}</style>
    </div>
  );
};

HeaderBar.defaultProps = defaultHeaderBarProps;

const style = css`
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-image: url(/images/projects/coast/coast.jpg);
  }
  a {
    margin-left: 10px;
    margin-right: 10px;
  }

  .left-links {
    display: flex;
    justify-content: flex-start;
  }
  .right-links {
    display: flex;
    justify-content: flex-end;
  }
`;

export const withHeader = <T extends HeaderBarProps>(
  WrappedComponent: React.ComponentType<T>,
): React.FC<T & HeaderBarProps> => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  const component = ({
    leftLinks,
    rightLinks,
    ...props
  }: T & HeaderBarProps): React.ReactElement => (
    <>
      <HeaderBar leftLinks={leftLinks} rightLinks={rightLinks}></HeaderBar>
      <WrappedComponent {...(props as T)}></WrappedComponent>
    </>
  );

  component.displayName = displayName;

  return component;
};
