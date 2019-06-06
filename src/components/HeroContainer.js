import React from 'react';
import {connect} from 'react-redux';
import HeroCard from './HeroCard'
import { getHeroes } from '../adapter/heroAdapter';

class HeroContainer extends React.Component {
  state = {
    minIndex: 0,
    maxIndex: 2
  }

  handleClick = (heroData) => {
    console.log('Got clicked');
  }

  getfilteredHeroes = () => {
    const filtered = []

    for (let i = this.state.minIndex; i < this.state.maxIndex; i++) {
      filtered.push(this.props.heroes[i])
    }

    return filtered;
  }

  createHeroCards = () => {
    const filtered = []

    for (let i = this.state.minIndex; i < this.state.maxIndex; i++) {
      filtered.push(this.props.heroes[i])
    }
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
const mapStatetoProps = (state) => {
  console.log("We are inside mapStatetoProps()", state);
  return state
}

export default connect(mapStatetoProps, { getHeroes })(HeroContainer);
