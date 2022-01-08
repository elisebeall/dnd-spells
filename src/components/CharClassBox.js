import '../css/CharClassBox.css';
import { Fragment } from 'react';
import CharClass from './CharClass';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';

const CharClassBox = () => {
  const {data, isLoading, error} = useFetch(endpoints.classes);
  const classes = data?.results;

  return (
    <div className="char-class-box">
      {error ? <>{error}</> :
        <>
          {isLoading ? <>loading...</> :
            <>
              {classes.map(charClass => <CharClass charClass={charClass} key={charClass.index}/>)}
            </>
          }
        </>
      }
    </div>
  )
}

export default CharClassBox;
