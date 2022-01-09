import React from "react";
import "../css/Spell.css";

const Spell = ({ name }) => {
  return (
    <div className="spell">
      <h4>{`💥 ${name}`}</h4>
    </div>
  )
}

export default Spell;
