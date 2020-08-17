import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const factLinks = this.props.facts.map(fact => (
      <li className='nav-item' key={fact.name}>
        <NavLink exact to={`/facts/${fact.name}`} className='nav-link'>
          {fact.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/facts'>
          Ability App
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink exact to='/facts' className='nav-link'>
                Home
              </NavLink>
            </li>
            {factLinks}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
