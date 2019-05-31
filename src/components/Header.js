import React from 'react';
import SearchBar from './SearchBar';
import hHLogo from '../images/hero-4-hire-logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="nav-main">
        <div className="nav-main-logo">
          <img src={hHLogo} alt="logo"/>
        </div>

        <SearchBar />
      </div>
    )
  }
}

export default Header;
