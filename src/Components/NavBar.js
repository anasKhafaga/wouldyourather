import React, { Component } from 'react'
import './ComStyles.scss';
import { Link} from 'react-router-dom';

const navItems = ['Home', 'New Question', 'Leader Board'];

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          {navItems.map((ele, index) => (
            <li key={index}>
              <Link to="/">{ele}</Link>
            </li>
          ))}
        </ul>
        <ul>
          <li key="1" className="nav-bar-avatar">
            <p>"NAME"</p>
            <img src="" alt="avatar" />
          </li>
          <li key="2" className="logout">Logout</li>
        </ul>
      </div>
    );
  }
}
