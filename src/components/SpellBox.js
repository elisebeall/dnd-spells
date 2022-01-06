import React from "react";
import dataStub from "../testing/stub data";
import { Link } from "react-router-dom";
import Spell from "./Spell";

const SpellBox = () => {
    const allSpells = dataStub.spellDetails;

    const spells = allSpells.map((spell) => {
        return (
            <Link to={`/spells/${spell.index}`} key={spell.index} > 
            <Spell 
                index={spell.index}
                name={spell.name}
                level={spell.level}
                school={spell.school.name}
            />
            </Link>
        )
    })

    return (
        {spells}
    )
}

export default SpellBox;