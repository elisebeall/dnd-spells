import { Fragment } from "react";
import dataStub from "../assets/stubData.js"; //Remove when we get data from App or context.
import { Link } from "react-router-dom";
import Spell from "./Spell";
import Bookmark from "./Bookmark"
import "../css/SpellBox.css";

const SpellBox = () => {
    const allSpells = dataStub.spellDetails;

    const spells = allSpells.map((spell) => {
        return (
            <Link to={`/spells/${spell.index}`} key={spell.index} > 
                <Spell 
                name={spell.name}
                level={spell.level}
                school={spell.school.name}
                />
            </Link>
        )
    })

  return (
    <>
      {spells}
    </>
  )
}

export default SpellBox;
