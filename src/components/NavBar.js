import React from 'react';
import NavItem from './NavItem';
import UserIcon from './UserIcon';
import NavIconWithDropDown from './NavIconWithDropDown';
import homeIcon from '../images/home.png';
import homeSelectIcon from '../images/home-selected.png';
import networkIcon from '../images/network.png';
import networkSelectIcon from '../images/network-selected.png';
import jobIcon from '../images/job.png';
import jobSelectIcon from '../images/job-selected.png';
import messageIcon from '../images/message.png';
import messageSelectIcon from '../images/message-selected.png';
import notificationIcon from '../images/notification.png';
import notificationSelectIcon from '../images/notification-selected.png';
import gridIcon from '../images/grid.png';
import gridSelectedIcon from '../images/grid-selected.png';

const navItems = [
  {icon: homeIcon, name: "Home", selected: homeSelectIcon},
  {icon: networkIcon, name: "My Network", selected: networkSelectIcon},
  {icon: jobIcon, name: "Jobs", selected: jobSelectIcon},
  {icon: messageIcon, name: "Messaging", selected: messageSelectIcon},
  {icon: notificationIcon, name: "Notifications", selected: notificationSelectIcon}
]

class NavBar extends React.Component {

  state = {
    currentHover: ''
  }

  renderNavItems = () => {
    return navItems.map(item => {
      return <NavItem
        key={item.name}
        icon={item.icon}
        name={item.name}
        hover={this.state.currentHover}
        selected={item.selected}
        onHoverChange={this.onHoverChange}/>
    });
  }

  onHoverChange = (iconName) => {
    this.setState({
      currentHover: iconName
    });
  }

  render() {
    return (
      <div className="nav-bar">
        {this.renderNavItems()}

        <UserIcon
          hover={this.state.currentHover}
          onHoverChange={this.onHoverChange}/>

        <NavIconWithDropDown
          hover={this.state.currentHover}
          onHoverChange={this.onHoverChange}/>
      </div>
    )
  }
}

export default NavBar;
