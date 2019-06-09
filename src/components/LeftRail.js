import React from 'react';
import { connect } from 'react-redux';
import { getCompanies } from '../adapter/companyAdapter'
import CommunityCard from './CommunityCard';

class LeftRail extends React.Component {
  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    return (
      <div className="left-rail">
        <CommunityCard />
        <CommunityCard />
      </div>
    )
  }
}

const mapStateToProps = ({ companyState }) => {
  console.log("LEFT RAIL", companyState)
  return companyState;
}

export default connect(mapStateToProps, { getCompanies })(LeftRail);
