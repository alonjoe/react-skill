import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const Header = () => {

  const history = useHistory();
  return (
    <StyleHead>
      <h1 style={{textAlign: "center"}}><span
      style={{ cursor: "pointer", color: "#000" }}
      onClick={() => { history.push("/") }}
      >my dictionary</span></h1>
    </StyleHead>
  )
}

export default Header;

const StyleHead = styled.div`
  border-bottom: 1px solid #ccc;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 1;

  h1 {
    margin: 30px 0;
  }
`;