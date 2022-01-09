import { useState, useEffect } from 'react';
import charClassIcons from '../charClassIcons.js';

const useIcon = (index) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    switch (index) {
      case 'barbarian':
        setIcon(charClassIcons.barbarian);
        break;
      case 'bard':
        setIcon(charClassIcons.bard);
        break;
      case 'cleric':
        setIcon(charClassIcons.cleric);
        break;
      case 'druid':
        setIcon(charClassIcons.druid);
        break;
      case 'fighter':
        setIcon(charClassIcons.fighter);
        break;
      case 'monk':
        setIcon(charClassIcons.monk);
        break;
      case 'paladin':
        setIcon(charClassIcons.paladin);
        break;
      case 'ranger':
        setIcon(charClassIcons.ranger);
        break;
      case 'rogue':
        setIcon(charClassIcons.rogue);
        break;
      case 'sorcerer':
        setIcon(charClassIcons.sorcerer);
        break;
      case 'warlock':
        setIcon(charClassIcons.warlock);
        break;
      case 'wizard':
        setIcon(charClassIcons.wizard);
        break;
      default:
        setIcon(charClassIcons.squizard);
        break;
    }
  }, [index])

  return { icon };
}

export default useIcon;
