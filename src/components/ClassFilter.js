import React from "react";
import { NavLink } from "react-router-dom";
import "../css/ClassFilter.css"

const ClassFilter = () => {
    return (
        <nav>
            <NavLink to={"/bard/spells"}>Bard</NavLink>
            <NavLink to={"/cleric/spells"}>Cleric</NavLink>
            <NavLink to={"/druid/spells"}>Druid</NavLink>
            <NavLink to={"/paladin/spells"}>Paladin</NavLink>
            <NavLink to={"/ranger/spells"}>Ranger</NavLink>
            <NavLink to={"/sorcerer/spells"}>Sorcerer</NavLink>
            <NavLink to={"/warlock/spells"}>Warlock</NavLink>
            <NavLink to={"/wizard/spells"}>Wizard</NavLink>
        </nav>
    )
}

export default ClassFilter;