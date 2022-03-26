import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";



const Header = () => {

  const history = useHistory();
  return (
    <StyleHead>
      <h1 style={{textAlign: "center"}}><span
      style={{ cursor: "pointer", color: "rgb(118, 118, 118)" }}
      onClick={() => { history.push("/") }}
      >영단어 공부장</span></h1>
    </StyleHead>
  )
}

export default Header;

const StyleHead = styled.div`
  border-bottom: 1px solid #000;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;
`;