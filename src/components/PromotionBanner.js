import React from 'react';
import PromotionCard from './PromotionCard'

class PromotionBanner extends React.Component {

  render() {
    return (
      <div className="promotion-banner">
        <div className="promotion-header">
          <span>Promoted</span>
        </div>

        <PromotionCard />
      </div>
    )
  }
}

export default PromotionBanner;
