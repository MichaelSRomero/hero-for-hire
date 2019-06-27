import React from 'react';

class MobileConnections extends React.Component {
  render() {
    return (
      <div className="connections-mobile">
        <div className="connection-box">
          <span className="connection-header">250</span> Connections
        </div>

        <div className="connection-box">
          <span className="connection-header">+</span> Find connections
        </div>

      </div>
    )
  }
}

export default MobileConnections;
