import React from 'react';
import downIcon from '../images/down.png'
import downSelectedIcon from '../images/down-selected.png'

const UserIcon = (props) => {
  return (
    <div
      className="nav-item"
      onMouseEnter={() => props.onHoverChange("user")}
      onMouseLeave={() => props.onHoverChange('')}>
      <div className="nav-icon">
        <div className="nav-user-icon">
        </div>
      </div>

      <div className="nav-text">
        <span>Me</span>
        <img
          src={props.hover === "user" ? downSelectedIcon : downIcon}
          alt="down arrow"/>
      </div>
    </div>
  )
}

export default UserIcon;
