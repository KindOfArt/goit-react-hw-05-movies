import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { InfoList } from './InfoLinks.styled';

const links = [
  { href: 'cast', text: 'Cast' },
  { href: 'review', text: 'Review' },
];

const InfoLinks = ({ backLinkHref }) => {
  return (
    <InfoList>
      {links.map(({ href, text }) => (
        <div key={href}>
          <NavLink to={href} state={{ from: backLinkHref }}>
            {text}
          </NavLink>
        </div>
      ))}
    </InfoList>
  );
};

InfoLinks.propTypes = {};

export default InfoLinks;
