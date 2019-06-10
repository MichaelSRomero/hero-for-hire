import React from 'react';

class CommunityCard extends React.Component {
  render() {
    const { communities } = this.props

    return (
      <div className="community-summary">
        <img className="community-avatar" src={communities[0].logo}/>
        <img className="community-avatar" src={communities[1].logo}/>
        <img className="community-avatar" src={communities[2].logo}/>
      </div>
    )
  }
}

export default CommunityCard;
