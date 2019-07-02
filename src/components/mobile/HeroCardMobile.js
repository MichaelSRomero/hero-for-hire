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

        <div className="hero-info">
          <p className="hero-name">{heroData.name}</p>
          <p className="hero-occupation">{heroData.occupation}</p>
        </div>
      </div>
    )
  }
}

export default HeroCardMobile;
