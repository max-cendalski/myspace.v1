import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h2>Navbar</h2>
    <NavLink to='/' activeClassName="is-active" exact={true}>MySpace</NavLink>
    <NavLink to='/notes' activeClassName='is-active ' >Notes</NavLink>
    <NavLink to='/code' activeClassName='is-active'>Code</NavLink>
  </div>
);

export default Navbar;