import '../css/Bookmark.css';
import { useState, useContext } from 'react';
import { FaBookmark as ActiveBookmark } from 'react-icons/fa';
import { FaRegBookmark as InactiveBookmark } from 'react-icons/fa';
import { UserSpellbookContext } from '../contexts/UserSpellbookContext';

const Bookmark = ({ spell }) => {
  const [ isBookmarked, setIsBookmarked ] = useState(false);
  const { bookmarks, setBookmarks } = useContext(UserSpellbookContext);

  const isIncluded = bookmarks.includes(spell)

  const addBookmark = () => {
    setIsBookmarked(true);
    setBookmarks([...bookmarks, spell])
  }

  const removeBookmark = () => {
    setIsBookmarked(false);
    setBookmarks(bookmarks.filter(bookmark => bookmark.index !== spell.index))
  }

  return (
    <>
      {isBookmarked ?
        <ActiveBookmark onClick={e => removeBookmark()}/> :
        <InactiveBookmark onClick={e => addBookmark()}/>
      }
    </>
  )
}

export default Bookmark;