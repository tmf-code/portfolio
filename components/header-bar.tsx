import styles from '../styles/header-bar.module.scss';

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
    <div className={styles['header-bar']}>
      <div className={styles['left-links']}>{makeList(leftLinks, pathname)}</div>
      <div className={styles['right-links']}>{makeList(rightLinks, pathname)}</div>
    </div>
  );
};

const makeList = (
  links: { href: string; text: string }[],
  pathname: string,
): React.ReactElement => (
  <ul>
    {links.map((link, index) => {
      const currentPage = pathname.split('/')[1] === link.href.replace('/', '');
      return (
        <li key={index}>
          <h2 className={currentPage ? styles['current-page'] : ''}>
            <a className={currentPage ? styles['current-page'] : ''} href={link.href}>
              {link.text}
            </a>
          </h2>
        </li>
      );
    })}
  </ul>
);

HeaderBar.defaultProps = defaultHeaderBarProps;
