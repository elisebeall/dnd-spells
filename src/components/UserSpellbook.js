import React from "react";
import dataStub from "../testing/stub data"; //Remove when we get bookmarked spells data from state
import { Link } from "react-router-dom";
import Spell from "./Spell";
import "../css/UserSpellbook.css";

const UserSpellbook = () => {
    const savedSpells = dataStub.spellDetails;

    const spells = savedSpells.map((spell) => {
        return (
            <div>
                <Link to={`/my-spellbook/${spell.index}`} key={spell.index} > 
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

export default UserSpellbook;