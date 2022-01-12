import { v4 as uuidv4 } from 'uuid';

export const bookmarkReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_BOOKMARK':
      return [...state, {
        index: action.spell.index,
        name: action.spell.name,
        url: action.spell.url,
        id: uuidv4()
      }];
    case 'REMOVE_BOOKMARK':
      return state.filter(bookmark => bookmark.id !== action.id);
    default:
      return state;
  }
}
