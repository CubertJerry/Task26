import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">All</NavLink>
        </li>
        <li>
          <NavLink to="/full-stack-development">Full Stack Development</NavLink>
        </li>
        <li>
          <NavLink to="/data-science">Data Science</NavLink>
        </li>
        <li>
          <NavLink to="/cyber-security">Cyber Security</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;