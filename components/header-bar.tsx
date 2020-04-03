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
    <div className="header-bar">
      <div className="left-links">{makeList(leftLinks, pathname)}</div>
      <div className="right-links">{makeList(rightLinks, pathname)}</div>
    </div>
  );
};

const makeList = (
  links: { href: string; text: string }[],
  pathname: string,
): React.ReactElement => (
  <ul>
    {links.map((link, index) => {
      console.log(pathname);
      const currentPage = pathname.split('/')[1] === link.href.replace('/', '');
      return (
        <li key={index} className="header-bar-li">
          <h2 className={currentPage ? 'current-page' : ''}>
            <a className={currentPage ? 'current-page' : ''} href={link.href}>
              {link.text}
            </a>
          </h2>
        </li>
      );
    })}
  </ul>
);

HeaderBar.defaultProps = defaultHeaderBarProps;
