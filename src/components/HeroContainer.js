import React from 'react';
import {connect} from 'react-redux';
import HeroCard from './HeroCard'

class HeroContainer extends React.Component {

  handleClick = (heroData) => {
    console.log('Got clicked');
  }

  createHeroCards = () => {
    return this.props.heroes.map(hero => <HeroCard key={hero.id} heroData={hero} handleClick={this.handleClick}/>)
  }

  componentDidMount() {
    console.log(this.props);
    fetch("http://localhost:3000/heroes")
      .then(res => res.json())
      .then(heroesJSON => this.props.fetchHeroes(heroesJSON))
  }
  render() {
    return (
      <div className="hero-container">
        <div className="hero-container-header">
          <h3>School alumni you may know</h3>
          <span>See all</span>
        </div>

        <div className="hero-list">
          {this.createHeroCards()}
        </div>
      </div>
    )
  }
}

///////////////////////////////////////////////////////////
//____________________REDUX HELPERS______________________//
///////////////////////////////////////////////////////////
const mapStatetoProps = (state) => {
  console.log("We are inside mapStatetoProps()", state);
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroes: (heroes) => dispatch({type: 'FETCH_HEROES', payload: heroes})
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(HeroContainer);
