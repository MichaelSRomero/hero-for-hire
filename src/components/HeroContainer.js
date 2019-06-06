import React from 'react';
import {connect} from 'react-redux';
import HeroCard from './HeroCard'
import { getHeroes } from '../adapter/heroAdapter';

class HeroContainer extends React.Component {

  handleClick = (heroData) => {
    console.log('Got clicked');
  }

  createHeroCards = () => {
    return this.props.heroes.map(hero => <HeroCard key={hero.id} heroData={hero} handleClick={this.handleClick}/>)
  }

  componentDidMount() {
    this.props.getHeroes()
  }

  render() {
    return ( this.props.heroes.length > 0 &&
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
const filterHeroes = ({heroes, minIndex, maxIndex}) => {
  const filtered = []

  for (let i = minIndex; i < maxIndex; i++) {
    filtered.push(heroes[i])
  }

  return filtered;
}

const mapStatetoProps = (state) => {
  console.log("We are inside mapStatetoProps()", state);

  return state.heroes.length > 0 ? {heroes: filterHeroes(state)} : state
}

export default connect(mapStatetoProps, { getHeroes })(HeroContainer);
