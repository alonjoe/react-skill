import React from "react";
import './App.css';
import { Route } from "react-router-dom";
import styled from "styled-components";
import {db} from "./firebase";
// import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { loadWordFB } from "./redux/modules/word";
import { useDispatch } from "react-redux";

import Header from "./Header";
import Main from "./Main";
import Edit from "./Edit";

function App() {
  
  const dispatch = useDispatch();
  React.useEffect(async() => {
    // console.log(db);
    
    dispatch(loadWordFB());

    // 가져오기
    // const query = await getDocs(collection(db, "vocabulary"));
    // console.log(query);
    // query.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    // });

    // 추가하기  (컬렉션 이름 바꿀때는 그냥 바꿀이름 넣어주면 된다)
    // addDoc(collection(db, "vocabulary"), {my_word: "home", my_mean: "집", my_ex: "go to home"});

    // 수정하기
    // const docRef = doc(db, "vocabulary", "1WbGEBZDSmFlrWNdNNsf");
    // updateDoc(docRef, {my_ex: "home party"});

    // 삭제하기
    // const docRef = doc(db, "vocabulary", "1WbGEBZDSmFlrWNdNNsf");
    // deleteDoc(docRef);

  }, [])

  return (
    <Wrap>
      <Header/>
      <Container>
        <Route path={"/"} exact>
          <Main/>
        </Route>

        <Route path={"/edit"}>
          <Edit/>
        </Route>
      </Container>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  /* height: 100vh; */
  width: 100vw;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
`;