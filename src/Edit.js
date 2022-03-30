import React  from "react";
import './App.css';
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createWord, addWordFB } from "./redux/modules/word";

import { VscBook } from "react-icons/vsc";

const Edit = (props) => {

  const history = useHistory();
  const my_word = React.useRef();
  const my_mean = React.useRef();
  const my_ex = React.useRef();
  const dispatch = useDispatch();
  
  const AddWordList = () => {
    // dispatch(createWord({ my_word: my_word.current.value, my_mean: my_mean.current.value, my_ex: my_ex.current.value }));
    dispatch(addWordFB({ my_word: my_word.current.value, my_mean: my_mean.current.value, my_ex: my_ex.current.value }));
  }

  return (
    <Container>
      <Editor>
        <Title>단어 추가</Title>
        <div>
          <label>단어</label>
          <input ref={my_word}/>
        </div>
        <div>
          <label>뜻</label>
          <input ref={my_mean}/>
        </div>
        <div>
          <label>예시</label>
          <input ref={my_ex}/>
        </div>
        <button
          style={{cursor: "pointer"}}
          onClick={() => {AddWordList(); history.goBack();} }>추가하기</button>
      </Editor>
      <StlyeBtn onClick={() => { history.push("/") }}><VscBook/></StlyeBtn>
    </Container>
  )
}

export default Edit;

const Container = styled.div`
  width: 50%;
  /* border: 1px solid #ccc; */
  margin: 0 auto;
  padding: 20px;
  padding-top: 130px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  color: #000;
`;

const Editor = styled.div`
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  color: rgb(118, 118, 118);
  border-radius: 20px;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0px 7px 10px #ccc;
  position: relative;
  
  div > label {
    margin-bottom: 10px;
    font-size: 12px;
    display: block;
  }
  div > input {
    width: 100%;
    margin-bottom: 15px;
    box-sizing: border-box;
    font-size: 20px;
    padding: 10px 10px;
  }
  button {
    /* margin-top: 20px; */
    padding: 10px 40px;
    text-align: center;
    margin: 20px auto;
    display: block;
    border: none;
    transition: 0.1s;
    &:hover {
      background: #ddd;
    }
  }
`;

const StlyeBtn = styled.button`
  position: fixed;
  bottom: 30px;
  right: 50px;
  font-size: 55px;
  font-weight: 700;
  color: #000;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: 0.1s;

  /* &:hover {
    transform: scale(1.1);
  } */
`;