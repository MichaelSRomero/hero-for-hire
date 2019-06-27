import React from 'react';
import UserIcon from '../UserIcon';
import SearchBar from '../SearchBar';

class NavBarMobile extends React.Component {
  render() {
    return (
      <div className="nav-bar-mobile">
        <UserIcon />
        <SearchBar />
      </div>
    )
  }
}

export default NavBarMobile;
