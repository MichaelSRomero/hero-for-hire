import React from 'react';
import NavItem from './NavItem';
import homeIcon from '../images/home.png';
import networkIcon from '../images/network.png';
import jobIcon from '../images/job.png';
import messageIcon from '../images/message.png';
import notificationIcon from '../images/notification-off.png';

const navItems = [
  {icon: homeIcon, name: "Home"},
  {icon: networkIcon, name: "My Network"},
  {icon: jobIcon, name: "Jobs"},
  {icon: messageIcon, name: "Messaging"},
  {icon: notificationIcon, name: "Notifications"},
]

class NavBar extends React.Component {

  renderNavItems = () => {
    return navItems.map(item => {
      return <NavItem icon={item.icon} name={item.name}/>
    });
  }

  render() {
    return (
      <div className="nav-bar">
        {this.renderNavItems()}
      </div>
    )
  }
}

export default NavBar;
