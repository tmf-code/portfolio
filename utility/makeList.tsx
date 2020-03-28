export const makeList = (
  links: { href: string; text: string }[],
  style?: string,
): React.ReactElement => (
  <ul>
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.href}>{link.text}</a>
      </li>
    ))}
    <style jsx>{style}</style>
  </ul>
);
