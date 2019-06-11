import React from 'react';
import { connect } from 'react-redux';
import { getCompanies } from '../adapter/companyAdapter'
import CommunityCard from './CommunityCard';
import speechBubbleIcon from '../images/speech-bubble.png';

class LeftRail extends React.Component {
  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    const { companies } = this.props

    return ( companies.length > 0 &&
      <div className="left-rail">
        <CommunityCard communities={[companies[0], companies[1], companies[2]]}/>
        
        <div className="summary-box-2">
          <img src={speechBubbleIcon}/>

          <div className="summary-box-text">
            <h3>No groups yet</h3>
            <p>Once you join groups, you will see them here</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ companyState }) => {
  return companyState;
}

export default connect(mapStateToProps, { getCompanies })(LeftRail);
