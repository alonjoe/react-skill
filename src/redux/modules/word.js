// word.js
import {db} from '../../firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Actions
const CREATE = 'word/CREATE';
const LOAD = 'word/LOAD';

// Action Creators
export function loadWord(word_list) {

  return {type: LOAD, word_list};
}

export function createWord(word) {
  console.log("액션 생성", word)
  return { type: CREATE, word };
}

const initialState = {
  list: []
}

// middlewares 
export const loadWordFB = () => {
  
  return async function(dispatch) {
    const word_data = await getDocs(collection(db, "vocabulary"));
    console.log(word_data); 

    let word_list = [];

    word_data.forEach((w) => {
      console.log(w.data());
      word_list.push({id: w.id, ...w.data()});
    });

    console.log(word_list);

    dispatch(loadWord(word_list));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD": {
      return {list: action.word_list};
    }
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
