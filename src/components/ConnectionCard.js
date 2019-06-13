import React from 'react';

class ConnectionCard extends React.Component {
  render() {
    const { connections } = this.props

    return (
      <div className="connection-summary">
        <img className="connection-avatar" src={connections[0].avatar}/>
        <img className="connection-avatar" src={connections[1].avatar}/>
        <img className="connection-avatar" src={connections[2].avatar}/>
        <span>Connections (133)</span>
      </div>
    )
  }
}

export default ConnectionCard;
