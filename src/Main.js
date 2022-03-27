import React  from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Card from "./Card";
import AddMode from "./AddMode";

const Main = (props) => {

  const word_list = useSelector((state) => state.word.list);

  return (
    <>      
      <div>
        <Box className="clearfix">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Box>
      </div>
      <AddMode/>
    </>
  )
}

export default Main;

const Box = styled.div`

  width: 50%;
  margin: 0 auto;
  padding-top: 130px;
  /* border: 1px solid #000; */
  box-sizing: border-box;
`;