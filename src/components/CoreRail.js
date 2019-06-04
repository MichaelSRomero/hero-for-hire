import React from 'react';
import HeroContainer from './HeroContainer'

class CoreRail extends React.Component {
  render() {
    return (
      <div className="core-rail">
        <div className="core-header">
          <span id="core-invitations">No pending invitations</span>
          <span id="core-btn">Manage</span>
        </div>

        <HeroContainer />
      </div>
    )
  }
}

export default CoreRail;
