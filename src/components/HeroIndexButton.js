import React from 'react';

class HeroIndexButton extends React.Component {
  render() {
    const { icon, handleClick, style } = this.props
    return (
      <div
        style={style}
        className="rnd-btn"
        onClick={handleClick}>
        <img src={icon} alt="previous"/>
      </div>
    )
  }
}

export default HeroIndexButton;
