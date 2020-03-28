import css from 'styled-jsx/css';
import { withHeader, HeaderBarProps } from '../../components/header-bar';

export type ProjectIndexProps = typeof defaultProjectIndexProps & HeaderBarProps;

const defaultProjectIndexProps = {
  projects: [
    { href: '/alacrity', text: 'Alacrity' },
    { href: '/ambientmatter', text: 'Ambient Matter' },
    { href: '/beeptext', text: 'Beep Text' },
    { href: '/coast', text: 'The Coast was Clear' },
    { href: '/dolls', text: 'Dolls' },
    { href: '/feedself', text: 'Feedself' },
    { href: '/gan', text: 'Generative Adversarial Networks' },
    { href: '/interpassivity', text: 'Interpassivity' },
    { href: '/ordinaryrambling', text: 'Ordinary Rambling' },
    { href: '/textures', text: 'Textures' },
  ],
};

const ProjectIndex = ({ projects }: ProjectIndexProps): React.ReactElement => {
  const list = (
    <ul>
      {projects.map((project, index) => (
        <li key={index}>
          <a href={project.href}>{project.text}</a>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="container">
      {list}
      <style jsx>{style}</style>
    </div>
  );
};

ProjectIndex.defaultProps = defaultProjectIndexProps;

const style = css`
  .container {
  }
`;

export default withHeader(ProjectIndex);
