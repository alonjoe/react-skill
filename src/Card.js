import React  from "react";
import styled from "styled-components";
import './App.css';

const Card = (props) => {

  return (
    <div className="container">
      <p>단어</p>
      <p>뜻</p>
      <Ex>예시</Ex>
    </div>
  )
}

export default Card;

const Ex = styled.p`
  color: blue;
`;
