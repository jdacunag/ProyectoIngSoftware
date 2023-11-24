import PropTypes from 'prop-types';
import style from './TopBar.module.css';

export default function TopBar({ logo, links }) {
  return (
    <div className={style.topBar}>
      <div className={style.logo}>{logo}</div>
      <div className={style.navLinks}>
        {links.map((link, index) => (
          <a key={index} href={link.url} className={style.navLink}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

TopBar.propTypes = {
  logo: PropTypes.node.isRequired, // Puede ser un texto o un componente de logo
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
