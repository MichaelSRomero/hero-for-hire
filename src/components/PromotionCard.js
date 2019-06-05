import React from 'react';
import promoArrow from '../images/promo-arrow.png'

class PromotionCard extends React.Component {
  render() {
    return (
      <div className="promotion-card">
        <img
          className="promotion-icon"
          src="https://c.wallhere.com/photos/5e/b9/1366x768_px_5_Centimeters_Per_Second_anime_city_clouds_Makoto_Shinkai_Skyscraper-578455.jpg!d"
          alt="icon"/>
        <div className="promotion-info">
          <h5>Companies apply to you.</h5>
        </div>

        <img
          className="promotion-arrow"
          src={promoArrow}
          alt="" />
      </div>
    )
  }
}

export default PromotionCard;
