import React from 'react';
import { connect } from 'react-redux';

class HeroIndexButton extends React.Component {
  render() {
    const { icon, iconOn, handleClick } = this.props
    return (
      <div
        className="rnd-btn"
        onClick={handleClick}>
        <img src={icon} alt="previous"/>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {maxIndex: state.maxIndex, minIndex: state.minIndex}
}

export default connect(mapStatetoProps)(HeroIndexButton);
