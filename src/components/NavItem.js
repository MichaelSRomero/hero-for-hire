import React from 'react';

class NavItem extends React.Component {
  render() {
    return (
      <div className="nav-item">
        <div className="nav-icon">
          <div
            className="nav-icon-img"
            onMouseEnter={() => console.log(`${this.props.name}`)}
            style={{backgroundImage: `url(${this.props.icon})`}}>
          </div>
        </div>

        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default NavItem;
