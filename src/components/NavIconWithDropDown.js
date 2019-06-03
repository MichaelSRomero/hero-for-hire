import React from 'react';
import gridIcon from '../images/grid.png';
import gridSelectedIcon from '../images/grid-selected.png';
import downSelectedIcon from '../images/down-selected.png'

const NavIconWithDropDown = (props) => {
  return (
    <div
      className="nav-item"
      onMouseEnter={() => props.onHoverChange("work")}
      onMouseLeave={() => props.onHoverChange('')}>
      <div className="nav-icon">
        <div
          className="nav-icon-img"
          style={ props.hover === "work" ? {backgroundImage: `url(${gridSelectedIcon})`}
            :
            {backgroundImage: `url(${gridIcon})`}
          }>
        </div>
      </div>

      <div className="nav-text">
        <span>Work</span>
        <img
          src={downSelectedIcon}
          alt="down arrow"/>
      </div>
    </div>
  )
}

export default NavIconWithDropDown;
