import React from 'react';
import PromotionBanner from './PromotionBanner'
import linkArrow from '../images/link-arrow.png'
import linkArrowHover from '../images/link-arrow-hover.png'

class RightRail extends React.Component {
  state = {
    currentHover: ''
  }

  onHoverChange = (item) => {
    this.setState({
      currentHover: item
    });
  }

  render() {
    const { currentHover } = this.state

    return (
      <div className="right-rail">
        <PromotionBanner />

        <footer>
          <div className="footer-links">
            <div className="row">
              <li>About</li>
              <li>Help Center</li>
              <li
                onMouseEnter={() => this.onHoverChange('privacy')}
                onMouseLeave={() => this.onHoverChange('')}>
                Privacy & Terms
                <img
                  src={currentHover === 'privacy' ? linkArrowHover : linkArrow}
                  alt="click me"/>
              </li>
            </div>

            <div className="row">
              <li>Advertising</li>
              <li
                onMouseEnter={() => this.onHoverChange('business')}
                onMouseLeave={() => this.onHoverChange('')}>
                Business Services
                <img
                  src={currentHover === 'business' ? linkArrowHover : linkArrow}
                  alt="click me"/>
              </li>
            </div>

            <div className="row">
              <li>Get the LinkedIn app</li>
              <li>More</li>
            </div>
          </div>

          <div className="footer-copyright">
          </div>
        </footer>
      </div>
    )
  }
}

export default RightRail;
