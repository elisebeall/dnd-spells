import { v4 as uuidv4 } from 'uuid';

export const charReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHAR':
      return [...state, {
        charName: action.character.charName,
        charClass: action.character.charClass,
        charClass: action.character.charSpells,
        id: uuidv4()
      }];
    case 'REMOVE_CHAR':
      return state.filter(character => character.id !== action.id);
    case 'SET_CHAR':
      return state.find(character => character.id === action.id);
    default:
      return state;
  }
}
