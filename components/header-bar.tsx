import css from 'styled-jsx/css';
import { makeList } from '../utility/makeList';

export type HeaderBarProps = typeof defaultHeaderBarProps;

const defaultHeaderBarProps = {
  leftLinks: [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Work' },
    { href: '/about', text: 'About' },
  ],
  rightLinks: [
    { href: '/', text: 'Home' },
    { href: '/projects', text: 'Work' },
    { href: '/about', text: 'About' },
  ],
};

export const HeaderBar = ({ leftLinks, rightLinks }: HeaderBarProps): React.ReactElement => {
  return (
    <div className="container">
      <div className="left-links">{makeList(leftLinks, style)}</div>
      <div className="right-links">{makeList(rightLinks, style)}</div>
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
  ul li {
    display: inline;
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
