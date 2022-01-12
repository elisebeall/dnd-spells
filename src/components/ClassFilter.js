import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/ClassFilter.css';

const ClassFilter = () => {
  return(
    <nav className="classNav">
      <NavLink to={'/bard/spells'} className="classLink">Bard</NavLink>
      <NavLink to={'/cleric/spells'} className="classLink">Cleric</NavLink>
      <NavLink to={'/druid/spells'} className="classLink">Druid</NavLink>
      <NavLink to={'/paladin/spells'} className="classLink">Paladin</NavLink>
      <NavLink to={'/ranger/spells'} className="classLink">Ranger</NavLink>
      <NavLink to={'/sorcerer/spells'} className="classLink">Sorcerer</NavLink>
      <NavLink to={'/warlock/spells'} className="classLink">Warlock</NavLink>
      <NavLink to={'/wizard/spells'} className="classLink">Wizard</NavLink>
      <NavLink to={'/class'} className="classLink">All Classes</NavLink>
    </nav>
  )
}

export default ClassFilter;
