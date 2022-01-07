import React from "react";
import dataStub from "../testing/stub data"; //Remove when we get bookmarked spells data from state
import { Link } from "react-router-dom";
import Spell from "./Spell";
import Bookmark from "./Bookmark"
import "../css/UserSpellbook.css";

const UserSpellbook = () => {
    const savedSpells = dataStub.spellDetails;

    const displaySpells = savedSpells.map((spell) => {
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
        <div>
            {displaySpells}    
        </div>
    )
}

export default UserSpellbook;