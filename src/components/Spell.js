import React from "react";
import "../css/Spell.css";

const Spell = ({ name, level, school }) => {
  return (
    <div>
      <h4>{`❂ ${name}`}</h4>
      <p>{`Level: ${level}`}</p>
      <p>{`School: ${school}`}</p>
    </div>
  )
}

export default Spell;
