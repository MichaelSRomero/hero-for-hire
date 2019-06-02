import React from 'react';

class NavItem extends React.Component {
  render() {
    return (
      <div className="nav-item">
        <div className="nav-icon">
          <img src={this.props.icon} alt="icon"/>
        </div>

        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default NavItem;
