import React from 'react';

const HeroCard = (props) => {
  return (
    <div className="hero-card">
      <div className="card-background"></div>
      <div className="hero-avatar" style={{backgroundImage: `url(${props.heroData.avatar})`}}></div>
      <div className="hero-info" onClick={() => props.handleClick(props.heroData)}>
        <p className="hero-name">{props.heroData.name}</p>
        <p className="hero-occupation">{props.heroData.occupation}</p>
        <div className="hero-affiliation">
          <div className="affiliation-img"></div>
          <div className="affiliation-text">{props.heroData.affiliation}</div>
        </div>
        <div className="hire-btn">Hire</div>
      </div>
    </div>
  )
}

export default HeroCard;
