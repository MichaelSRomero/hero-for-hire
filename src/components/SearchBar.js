import React from 'react';
import searchIcon from '../images/search.png'


class SearchBar extends React.Component {
  render() {
    return (
      <div className="nav-search">
        <img src={searchIcon} alt=""/>
        <input
          className="search"
          placeholder="Search"
        />
      </div>
    )
  }
}

export default SearchBar;
