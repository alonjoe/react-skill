// word.js
import {db} from '../../firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { async } from '@firebase/util';

// Actions
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';
// const DELETE = 'word/DELETE';

// Action Creators
export function loadWord(word_list) {

  return {type: LOAD, word_list};
}

export function createWord(word) {
  console.log("액션 생성", word)
  return { type: CREATE, word };
}

// export function deleteWord(word) {
//   console.log("삭제액션생성", word);
//   return { type: DELETE, word };
// }

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
      // console.log(w.data());
      word_list.push({id: w.id, ...w.data()});
    });

    console.log(word_list);

    dispatch(loadWord(word_list));
  }
}

export const addWordFB = (word) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "vocabulary"), word);
    console.log(docRef)
    // const _word = await getDoc(docRef);
    const word_data = {id: docRef.id, ...word};
    console.log(word_data);

    dispatch(createWord(word_data));
  }
}

// export const deleteWordFB = (word_id) => {
//   return async function (dispatch, getState) {
//     if (!word_id) {
//       window.alert('아이디가 없네요!');
//       return;
//     }
//     const docRef = doc(collection(db, "word", word_id));
//     await deleteDoc(docRef);
//   }
// }



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
      console.log(new_word);
      return {list: new_word};
    }
    
    default: 
      return state;
  }
}
