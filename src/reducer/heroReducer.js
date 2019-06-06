let heroState = {
  heroes: []
}

const heroReducer = (state = heroState, action) => {
  console.log("This is the action inside reducer", action)

  switch (action.type) {
    case "FETCH_HEROES":
      return {...state, heroes: action.payload}
    default:
      return state;
  }
}

export default heroReducer;
