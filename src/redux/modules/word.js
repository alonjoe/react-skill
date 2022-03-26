// word.js

// Actions
const CREATE = 'word/CREATE';

// Action Creators
export function createWord(word) {
  return { type: CREATE, word };
}

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}
