import React, { Component } from 'react'
import './ComStyles.scss';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../Store/actions/auth';

const navItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'New Question',
    path: '/add',
  },
  {
    name: 'Leader Board',
    path: '/leaderboard',
  },
];

class NavBar extends Component {
  
  render() {
    return (
      <div className="nav-bar">
        <ul>
          {navItems.map((ele, index) => (
            <li key={index}>
              <Link to={ele.path}>{ele.name}</Link>
            </li>
          ))}
        </ul>
        {this.props.user ? (
          <ul>
            <li key="1" className="nav-bar-avatar">
              <p>Hello, {this.props.user.name}</p>
              <img src={this.props.user.avatarURL} alt="avatar" />
            </li>
            <li key="2" className="logout" onClick={this.props.logout}>
              Logout
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}


export default connect((state) => ({
  user: state.authUser
}), (dispatch) => ({
  logout: () => dispatch(userLogout())
}))(NavBar);