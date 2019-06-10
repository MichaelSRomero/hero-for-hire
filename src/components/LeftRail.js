import React from 'react';
import { connect } from 'react-redux';
import { getCompanies } from '../adapter/companyAdapter'
import CommunityCard from './CommunityCard';

class LeftRail extends React.Component {
  componentDidMount() {
    this.props.getCompanies();
  }

  render() {
    const { companies } = this.props

    return ( companies.length > 0 &&
      <div className="left-rail">
        <CommunityCard communities={[companies[0], companies[1], companies[2]]}/>
      </div>
    )
  }
}

const mapStateToProps = ({ companyState }) => {
  return companyState;
}

export default connect(mapStateToProps, { getCompanies })(LeftRail);
