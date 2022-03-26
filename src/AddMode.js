import React  from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import './App.css';

const AddMode = (props) => {

  const history = useHistory();

  return (
    <StyleEdit>
      <button onClick={() => {
        history.push("/edit");
      }}>📝</button>
    </StyleEdit>
  )
}

export default AddMode;

const StyleEdit = styled.div`
  button {
    position: fixed;
    bottom: 30px;
    right: 20px;
    font-size: 45px;
    font-weight: 700;
    color: skyblue;
    background: #fff;
    border: none;
    cursor: pointer;
    transition: 0.1s;
  }
  button:hover {
    transform: scale(1.2);
  }
`;
