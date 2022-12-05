import InfoLinks from 'components/InfoLinks/InfoLinks';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AdditionalInfo = ({ backLinkHref }) => {
  return (
    <div>
      <InfoLinks backLinkHref={backLinkHref} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

AdditionalInfo.propTypes = {};

export default AdditionalInfo;
