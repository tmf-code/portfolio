import css from 'styled-jsx/css';

export type HeaderBarProps = typeof defaultHeaderBarProps;

const defaultHeaderBarProps = {
  leftLinks: [
    { href: '/', text: 'home' },
    { href: '/work', text: 'work' },
  ],
  rightLinks: [{ href: '/about', text: 'about' }],
  pathname: '',
};

export const HeaderBar = ({
  leftLinks,
  rightLinks,
  pathname,
}: HeaderBarProps): React.ReactElement => {
  return (
    <div className="container">
      <div className="left-links">{makeList(leftLinks, pathname, style)}</div>
      <div className="right-links">{makeList(rightLinks, pathname, style)}</div>
      <style jsx>{style}</style>
    </div>
  );
};

const makeList = (
  links: { href: string; text: string }[],
  pathname: string,
  style?: string,
): React.ReactElement => (
  <ul>
    {links.map((link, index) => {
      const currentPage = pathname.split('/')[1] === link.href.replace('/', '');
      return (
        <li key={index}>
          <h2 className={currentPage ? 'current-page' : ''}>
            <a className={currentPage ? 'current-page' : ''} href={link.href}>
              {link.text}
            </a>
          </h2>
        </li>
      );
    })}
    <style jsx>{style}</style>
  </ul>
);

HeaderBar.defaultProps = defaultHeaderBarProps;

const style = css`
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  h2 {
    display: inline;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    display: inline;
    margin: 0;
    padding: 0;
  }

  .left-links {
    display: flex;
    justify-content: flex-start;
  }

  .left-links a {
    margin-left: 0;
    margin-right: 20px;
  }

  .right-links a {
    margin-left: 20px;
    margin-right: 0;
  }
  .right-links {
    display: flex;
    justify-content: flex-end;
  }
  a {
    text-decoration: none;
    color: orange;
  }

  .current-page {
    color: black;
  }

  a:hover,
  a:hover::selection {
    color: pink;
  }

  a::selection {
    color: hotpink;
  }
`;
