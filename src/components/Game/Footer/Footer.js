import logo from '../../../assets/rs_school_logo.svg';

import './Footer.scss';

const Footer = ({ t }) => (
  <footer>
    <a href="https://github.com/cqxg" rel="noreferrer" target="_blank">
      <span>cqxg 2021</span>
    </a>
    <span className="hotkeys">{t('hotkeys')}</span>
    <a href="https://rs.school/js/" rel="noreferrer" target="_blank">
      <img alt="rss logo" src={logo} />
    </a>
  </footer>
);

export default Footer;
