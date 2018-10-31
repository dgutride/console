import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Avatar, Brand, PageHeader } from '@patternfly/react-core';

import AppToolbar from './app-toolbar';
import okdLogoImg from '../imgs/okd-logo.svg';
import ocpLogoImg from '../imgs/openshift-platform-logo.svg';
import onlineLogoImg from '../imgs/openshift-online-logo.svg';
import dedicatedLogoImg from '../imgs/openshift-dedicated-logo.svg';
import avatarImg from '../imgs/img_avatar.svg';

const AppHeader = ({ onNavToggle }) => {
  let logoImg, logoAlt;

  // Webpack won't bundle these images if we don't directly reference them, hence the switch
  switch (window.SERVER_FLAGS.branding) {
    case 'ocp':
      logoImg = ocpLogoImg;
      logoAlt = 'OpenShift Container Platform';
      break;
    case 'online':
      logoImg = onlineLogoImg;
      logoAlt = 'OpenShift Online';
      break;
    case 'dedicated':
      logoImg = dedicatedLogoImg;
      logoAlt = 'OpenShift Dedicated';
      break;
    default:
      logoImg = okdLogoImg;
      logoAlt = 'OKD';
  }
  return (
    <PageHeader
      logo={<Brand src={logoImg} alt={logoAlt} />}
      toolbar={<AppToolbar />}
      avatar={<Avatar src={avatarImg} alt="Avatar image" />}
      showNavToggle
      onNavToggle={onNavToggle}
    />
  );
};

AppHeader.propTypes = {
  onNavToggle: PropTypes.func,
};

export default AppHeader;
