import React from "react";
import dataStub from "../testing/stub data"; //Remove when we get data from App or context.
import { Link } from "react-router-dom";
import Spell from "./Spell";
import "../css/SpellBox.css";

const SpellBox = () => {
    const allSpells = dataStub.spellDetails;

    const spells = allSpells.map((spell) => {
        return (
            <div>
                <Link to={`/spells/${spell.index}`} key={spell.index} > 
                    <Spell 
                    name={spell.name}
                    level={spell.level}
                    school={spell.school.name}
                    />
                </Link>
                <Bookmark />
            </div>
        )
    })

    return (
        {spells}
    )
}

export default SpellBox;