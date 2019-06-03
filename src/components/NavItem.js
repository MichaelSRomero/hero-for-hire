import React from 'react';

class NavItem extends React.Component {
  render() {
    const {name, icon, selected, hover} = this.props

    return (
      <div
        className="nav-item"
        onMouseEnter={() => this.props.onHoverChange(name)}
        onMouseLeave={() => this.props.onHoverChange('')}>
        <div className="nav-icon">
          <div
            className="nav-icon-img"
            style={ hover === name ? {backgroundImage: `url(${selected})`}
              :
              {backgroundImage: `url(${icon})`}
            }>
          </div>
        </div>

        <span>{name}</span>
      </div>
    )
  }
}

export default NavItem;
