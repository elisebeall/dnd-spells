import '../css/Bookmark.css';
import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';

const Bookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <>
      {isBookmarked ?
        <FaBookmark onClick={e => setIsBookmarked(false)}/> :
        <FaRegBookmark onClick={e => setIsBookmarked(true)}/>
      }
    </>
  )
}
