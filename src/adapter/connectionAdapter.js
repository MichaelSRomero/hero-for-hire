const fetchConnections = (connections) => ({type: 'FETCH_CONNECTIONS', payload: connections})

export const getConnections = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/connections")
    // return fetch("http://004c4d7c.ngrok.io/connections")
      .then(res => res.json())
      .then(connectionsJSON => dispatch(fetchConnections(connectionsJSON)) )
  }
}
