// word.js
import {db} from '../../firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, arrayRemove } from "firebase/firestore";
import { async } from '@firebase/util';

// Actions
const LOAD = 'word/LOAD';
const CREATE = 'word/CREATE';
const DELETE = 'word/DELETE';
const UPDATE = 'word/UPDATE';

// Action Creators
export function loadWord(word_list) {

  return {type: LOAD, word_list};
}

export function createWord(word) {
  console.log("액션 생성", word)
  return { type: CREATE, word };
}

export function deleteWord(word_index) {
  console.log("삭제액션생성", word_index);
  return { type: DELETE, word_index };
} 

export function updateWord(word_index) {
  return { type: UPDATE, word_index}
}

const initialState = {
  list: []
}

// middlewares 
export const loadWordFB = () => {
  
  return async function(dispatch) {
    const word_data = await getDocs(collection(db, "vocabulary"));
    // console.log(word_data); 

    let word_list = [];

    word_data.forEach((w) => {
      // console.log(w.data());
      word_list.push({id: w.id, ...w.data()});
    });

    // console.log(word_list);

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

export const deleteWordFB = (word_id) => {
  console.log(word_id);
  return async function (dispatch, getState) {
    const docRef = doc(db, "vocabulary", word_id);  //여기 await 없어도됌
    console.log((await getDoc(docRef)).data());
    deleteDoc(docRef);                                    //여기까지 코드가 파이어베이스에 삭제함
    
    const _word_list = getState().word.list;              //여기서는 리덕스에서 삭제시킬 코드
    console.log(_word_list);
    const word_index = _word_list.findIndex((w) => {
      return w.id === word_id;
    })
    console.log(word_index);
    dispatch(deleteWord(word_index));
  }
}

export const updateWordFB = (word) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "vocabulary", word.id);
    await updateDoc(docRef, {completed: !word.completed });
    // console.log(((await getDoc(docRef)).data()));


    const _word_list = getState().word.list;
    const word_index =  _word_list.findIndex((w) => {
      return w.id === word.id;
    })
    // console.log(word_index);
    dispatch(updateWord(word_index));
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
      console.log(new_word);
      return {list: new_word};
    }

    case "word/DELETE": {
      console.log(action, state);
      const word_list = state.list.filter((v, i) => action.word_index !== i)  
      return {list: word_list};
    }

    case "word/UPDATE": {
      console.log(action, state);
      const word_list = state.list.map((v, index) => {
        if (action.word_index === index) {          
          return {...v, completed: !v.completed};
        } else {
          return {...v}
        }
      })
      return {list: word_list};
    }
  
    default: 
      return state;
  }
}
