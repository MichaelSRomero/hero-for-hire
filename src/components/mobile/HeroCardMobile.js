import React from 'react';

class HeroCardMobile extends React.Component {
  render() {
    const { heroData } = this.props
    return(
      <div className="hero-card-mobile">
        <div
          className="hero-avatar-mobile"
          style={
            {backgroundImage: `url(${heroData.avatar})`}
          }>
        </div>

        <div className="hero-info-mobile">
          <p className="hero-name-mobile">{heroData.name}</p>
          <p className="hero-occupation-mobile">{heroData.occupation}</p>

          <div className="affiliation-mobile">
            <div className="affiliation-img-mobile"></div>
            <div className="affiliation-text-mobile">{heroData.affiliation}</div>
          </div>
        </div>

        <div className="hire-btn">Hire</div>
      </div>
    )
  }
}

export default HeroCardMobile;
