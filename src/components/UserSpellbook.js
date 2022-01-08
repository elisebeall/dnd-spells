import React from "react";
import dataStub from "../assets/stubData"; //Remove when we get bookmarked spells data from state
import { Link } from "react-router-dom";
import Spell from "./Spell";
import Bookmark from "./Bookmark"
import "../css/UserSpellbook.css";

const UserSpellbook = () => {
    const savedSpells = dataStub.spellDetails;

    const displaySpells = savedSpells.map((spell) => {
        return (
            <div key={spell.index} className="singleSpell">
            <Link to={`/my-spellbook/${spell.index}`} > 
                <Spell 
                name={spell.name}
                />
            </Link>
            <Bookmark />
            </div>
        )
    })

    return (
        <div className="spellBox">
            <h2>My Saved Spells</h2>
            {displaySpells}    
        </div>
    )
}

export default UserSpellbook;