export const nextIndex = () => ({type: 'NEXT_INDEX'})
export const prevIndex = () => ({type: 'PREV_INDEX'})
const fetchHeroes = (heroes) => ({type: 'FETCH_HEROES', payload: heroes})

export const getHeroes = () => {
  return (dispatch) => {
    return fetch("https://hero4hire.herokuapp.com/heroes")
    // return fetch("http://004c4d7c.ngrok.io/heroes")
      .then(res => res.json())
      .then(heroesJSON => dispatch(fetchHeroes(heroesJSON)) )
  }
}
