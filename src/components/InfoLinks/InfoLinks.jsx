import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { InfoList } from './InfoLinks.styled';
import styled from 'styled-components';

const links = [
  { href: 'cast', text: 'Cast' },
  { href: 'review', text: 'Review' },
];

const InfoLinks = ({ backLinkHref }) => {
  return (
    <InfoList>
      {links.map(({ href, text }) => (
        <div key={href}>
          <StyledLink to={href} state={{ from: backLinkHref }}>
            {text}
          </StyledLink>
        </div>
      ))}
    </InfoList>
  );
};

InfoLinks.propTypes = {
  backLinkHref: PropTypes.object.isRequired,
};

export default InfoLinks;

const StyledLink = styled(NavLink)`
  font-size: 26px;
  font-weight: bolder;
  &:hover {
    text-decoration: underline;
    color: blue;
  }
`;
