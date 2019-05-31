import React from 'react';
import searchIcon from '../images/search.png'


class SearchBar extends React.Component {

  state = {
    searchText: ''
  }

  handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    return (
      <div className="nav-search">
        <img src={searchIcon} alt=""/>
        <input
          onChange={this.handleChange}
          className="search"
          placeholder="Search"
        />
      </div>
    )
  }
}

export default SearchBar;
