import { createContext, useState } from "react";

export const UserSpellbookContext = createContext();

const UserSpellbookContextProvider = (props) => {
  const [ bookmarks, setBookmarks ] = useState([]);

  return (
    <UserSpellbookContext.Provider value={{bookmarks, setBookmarks}}>
      {props.children}
    </UserSpellbookContext.Provider>
  )
}

export default UserSpellbookContextProvider;