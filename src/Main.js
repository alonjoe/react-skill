import React  from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import AddMode from "./AddMode";

const Main = (props) => {

  const word_list = useSelector((state) => state.word.list)
  console.log(word_list);
  return (
    <>      
      <div>
        <Box className="clearfix">
          
            {word_list.map((value, i) => {
              return (
                <div className="container" key={value.my_word + i}>
                  <p>{value.my_word}</p>
                  <p>{value.my_mean}</p>
                  <Ex>{value.my_ex}</Ex>
                </div>
              );
            })}
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

const Ex = styled.p`
  color: blue;
`;
