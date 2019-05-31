import React from 'react';
import hHLogo from '../images/hero-4-hire-logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="nav-main">
        <div className="nav-main-logo">
          <img src={hHLogo} alt="logo"/>
        </div>
      </div>
    )
  }
}

export default Header;
