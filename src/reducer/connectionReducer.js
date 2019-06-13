const connectionState = {
  connections: []
}

const connectionReducer = (state = connectionState, action) => {
  switch (action.type) {
    case "FETCH_CONNECTIONS":
      return {...state, connections: action.payload}
    default:
      return state;
  }

}

export default connectionReducer;
