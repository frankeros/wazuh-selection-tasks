import React, { useState } from 'react';
import {
  EuiHeader,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiHeaderLinks,
  EuiHeaderLink,
} from '@elastic/eui';
import { useHistory } from "react-router-dom";


const Header = () => {
  let history = useHistory();
  const [menuActive, setMenuActive] = useState('home');
  const onMenuClick = (e, menu) => {
    e.preventDefault();
    setMenuActive(menu);
    history.push(`/${menu}`);
  };

  return (
    <EuiHeader>
      <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo href="/home" onClick={(e) => onMenuClick(e, 'home')}>Demo</EuiHeaderLogo>
      </EuiHeaderSectionItem>

      <EuiHeaderSectionItem>
        <EuiHeaderLinks aria-label="App navigation links example">
          <EuiHeaderLink href="/tabs"
            isActive={menuActive === 'tabs'}
            onClick={(e) => onMenuClick(e, 'tabs')}
          >
            Navigation Tabs
          </EuiHeaderLink>

          <EuiHeaderLink href="/api"
            isActive={menuActive === 'api'}
            onClick={(e) => onMenuClick(e, 'api')}
          >
            Api Calls
          </EuiHeaderLink>
        </EuiHeaderLinks>
      </EuiHeaderSectionItem>
    </EuiHeader>
  )
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;