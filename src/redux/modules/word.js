// word.js

// Actions
const CREATE = 'word/CREATE';

// Action Creators
export function createWord(word) {
  console.log("액션 생성", word)
  return { type: CREATE, word };
}

const initialState = {
  list: []
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "word/CREATE": {
      console.log("이제 넣는다!", state, action.word);
      const new_word = [...state.list, action.word];
      return {list: new_word};
    }
    
    default: 
      return state;
  }
}
