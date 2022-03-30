import React  from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import './App.css';

import { BsPencilSquare } from "react-icons/bs";


const AddMode = (props) => {

  const history = useHistory();

  return (
    <StyleEdit>
      <button onClick={() => {
        history.push("/edit");
      }}><BsPencilSquare style={{color: "#000"}}/></button>
    </StyleEdit>
  )
}

export default AddMode;

const StyleEdit = styled.div`
  button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    font-size: 45px;
    font-weight: 700;
    color: skyblue;
    background: #fff;
    border: none;
    cursor: pointer;
    transition: 0.1s;
  }
  /* button:hover {
    transform: scale(1.1);
  } */
`;
