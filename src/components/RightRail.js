import React from 'react';
import PromotionBanner from './PromotionBanner'
import linkArrow from '../images/link-arrow.png'
import linkArrowHover from '../images/link-arrow-hover.png'

class RightRail extends React.Component {
  render() {
    return (
      <div className="right-rail">
        <PromotionBanner />

        <footer>
          <div className="footer-links">
            <div className="row">
              <li>About</li>
              <li>Help Center</li>
              <li>
                Privacy & Terms
                <img src={linkArrow} alt="click me"/>
              </li>
            </div>
            <div className="row">
              <li>Advertising</li>
              <li>Business Services</li>
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
