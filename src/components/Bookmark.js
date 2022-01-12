import '../css/Bookmark.css';
import { useState, useContext } from 'react';
import { FaBookmark as ActiveBookmark } from 'react-icons/fa';
import { FaRegBookmark as InactiveBookmark } from 'react-icons/fa';
import { UserSpellbookContext } from '../contexts/UserSpellbookContext';

const Bookmark = ({ spell }) => {
  const { bookmarks, dispatch } = useContext(UserSpellbookContext);

  const isBookmarked = bookmarks.find(bookmark => bookmark.index === spell.index);

  // const addBookmark = () => {
  //   console.log('addBookmark method, isBookmarked var', isBookmarked)
  //   console.log('addBookmark method, bookmarks array', bookmarks)
  //
  //   //setBookmarks([...bookmarks, spell]);
  // }
  //
  // const removeBookmark = () => {
  //   console.log('removeBookmark method, isBookmarked var', isBookmarked)
  //   console.log('removeBookmark method, bookmarks array', bookmarks)
  //
  //   //setBookmarks(bookmarks.filter(bookmark => bookmark.index !== spell.index));
  // }

  return (
    <div className="bookmark">
      {isBookmarked ?
        <ActiveBookmark onClick={e => dispatch({ type: 'REMOVE_BOOKMARK', id: spell.id })} /> :
        <InactiveBookmark onClick={e => dispatch({ type: 'ADD_BOOKMARK', spell })}/>
      }
    </div>
  )
}

export default Bookmark;
