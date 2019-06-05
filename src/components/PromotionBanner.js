import React from 'react';
import PromotionCard from './PromotionCard'

const promos = [
  {
    icon: "https://c.wallhere.com/photos/5e/b9/1366x768_px_5_Centimeters_Per_Second_anime_city_clouds_Makoto_Shinkai_Skyscraper-578455.jpg!d",
    header: "Companies apply to you.",
    description: "Tell us what you love to do and have companies compete over you."
  },
  {
    icon: "https://badger11.files.wordpress.com/2006/12/boxes.jpg?w=456&h=456",
    header: "#1 Office Movers in Kanto",
    description: "#1 Office & Commercial Movers in Kanto! Since 1983. Now 10% Off, Call Now !"
  },
  {
    icon: "https://data.whicdn.com/images/302971672/large.jpg",
    header: "MS Criminal Justice",
    description: "Earn Your Master of Criminal Justice in Law Development in as Few as 10 Months."
  }
]

class PromotionBanner extends React.Component {

  createPromotionCards = () => {
    return promos.map(promo => <PromotionCard promo={promo}/>)
  }

  render() {
    return (
      <div className="promotion-banner">
        <div className="promotion-header">
          <span>Promoted</span>
        </div>

        {this.createPromotionCards()}
      </div>
    )
  }
}

export default PromotionBanner;
