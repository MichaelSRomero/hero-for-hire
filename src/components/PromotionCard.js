import React from 'react';
import promoArrow from '../images/promo-arrow.png'
import promoArrowHover from '../images/promo-arrow-hover.png'

class PromotionCard extends React.Component {
  render() {
    const {icon, header, description} = this.props.promo
    const {currentHover, onHoverChange} = this.props

    return (
      <div
        className="promotion-card"
        onMouseEnter={() => onHoverChange(header)}
        onMouseLeave={() => onHoverChange('')}>
        <img
          className="promotion-icon"
          src={icon}
          alt="icon"/>
        <div className="promotion-info">
          <h5>{header}</h5>
          <p>{description}</p>
        </div>

        <div className="outer-arrow">
          <img
            className="promotion-arrow"
            src={currentHover === header ? promoArrowHover : promoArrow}
            alt="" />
        </div>
      </div>
    )
  }
}

export default PromotionCard;
