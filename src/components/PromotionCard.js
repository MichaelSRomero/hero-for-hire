import React from 'react';
import promoArrow from '../images/promo-arrow.png'

class PromotionCard extends React.Component {
  render() {
    const {icon, header, description} = this.props.promo

    return (
      <div className="promotion-card">
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
            src={promoArrow}
            alt="" />
        </div>
      </div>
    )
  }
}

export default PromotionCard;
