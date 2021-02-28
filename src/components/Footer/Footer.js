import logo from '../../assets/rs_school_logo.svg';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <a href='https://github.com/cqxg' rel='noreferrer' target='_blank' >
                <span>
                    cqxg 2020
                </span>
            </a>
            <a href='https://rs.school/js/' rel='noreferrer' target='_blank' >
                <img alt='rss logo' src={logo} />
            </a>
        </footer>
    )
}

export default Footer;