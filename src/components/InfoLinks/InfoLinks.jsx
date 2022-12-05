import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const links = [
  { href: 'cast', text: 'Cast' },
  { href: 'review', text: 'Review' },
];

const InfoLinks = ({ backLinkHref }) => {
  return (
    <div>
      {links.map(({ href, text }) => (
        <div key={href}>
          <NavLink to={href} state={{ from: backLinkHref }}>
            {text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

InfoLinks.propTypes = {};

export default InfoLinks;
