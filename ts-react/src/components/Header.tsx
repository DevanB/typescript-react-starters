import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.SFC<{}> = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/team">Team</NavLink>
  </nav>
);

export { Header };
