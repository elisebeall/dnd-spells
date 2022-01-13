import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ClassFilter.css';

const ClassFilter = () => {
  return(
    <nav className="class-nav">
      <NavLink to={'/bard/spells'} className="class-link">Bard</NavLink>
      <NavLink to={'/cleric/spells'} className="class-link">Cleric</NavLink>
      <NavLink to={'/druid/spells'} className="class-link">Druid</NavLink>
      <NavLink to={'/paladin/spells'} className="class-link">Paladin</NavLink>
      <NavLink to={'/ranger/spells'} className="class-link">Ranger</NavLink>
      <NavLink to={'/sorcerer/spells'} className="class-link">Sorcerer</NavLink>
      <NavLink to={'/warlock/spells'} className="class-link">Warlock</NavLink>
      <NavLink to={'/wizard/spells'} className="class-link">Wizard</NavLink>
      <NavLink to={'/class'} className="class-link">All Classes</NavLink>
    </nav>
  )
}

export default ClassFilter;
