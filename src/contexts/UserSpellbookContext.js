import { createContext, useReducer, useEffect } from 'react';
import { bookmarkReducer } from '../reducers/bookmarkReducer';

export const UserSpellbookContext = createContext();

const UserSpellbookContextProvider = (props) => {
  const [ bookmarks, dispatch ] = useReducer(bookmarkReducer, [], () => {
    const localData = localStorage.getItem('bookmarks');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(()=> {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  return (
    <UserSpellbookContext.Provider value={{bookmarks, dispatch}}>
      { props.children }
    </UserSpellbookContext.Provider>
  )
}

export default UserSpellbookContextProvider;
