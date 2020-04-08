import styles from '../styles/footer-bar.module.scss';

export const FooterBar = (): React.ReactElement => {
  return (
    <div className={styles['footer-bar']}>
      <div className={styles['copyright']}>© 2020 TMF. All Rights Reserved</div>
      <div className={styles['socials']}>GH, LinkedIn, Instagram</div>
    </div>
  );
};
