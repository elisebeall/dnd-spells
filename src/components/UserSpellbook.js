import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spell from "./Spell";
import Bookmark from "./Bookmark"
import { UserSpellbookContext } from "../contexts/UserSpellbookContext";
import "../css/UserSpellbook.css";

const UserSpellbook = () => {
  const { bookmarks, setBookmarks } = useContext(UserSpellbookContext);

  const displaySpells = bookmarks.map((spell) => {
    return (
      <div key={spell.index} className="singleSpell">
      <Link to={`/spells/${spell.index}`} > 
        <Spell 
          name={spell.name}
        />
      </Link>
      <Bookmark spell={spell}/>
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