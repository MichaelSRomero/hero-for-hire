import React from 'react';
import PromotionBanner from './PromotionBanner'

class RightRail extends React.Component {
  render() {
    return (
      <div className="right-rail">
        <PromotionBanner />

        <footer>
          <div className="footer-links">
          </div>

          <div className="footer-copyright">
          </div>
        </footer>
      </div>
    )
  }
}

export default RightRail;
