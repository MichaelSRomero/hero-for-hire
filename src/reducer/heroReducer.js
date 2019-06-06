let heroState = {
  heroes: [],
  minIndex: 0,
  maxIndex: 3
}

const heroReducer = (state = heroState, action) => {

  switch (action.type) {
    case "FETCH_HEROES":
      return {...state, heroes: action.payload}
    case "UPDATE_INDEX":
      return {
        ...state,
        minIndex: state.minIndex + 3,
        maxIndex: state.maxIndex + 3
      }
    default:
      return state;
  }
}

export default heroReducer;
