import React, { useEffect }  from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import AddMode from "./AddMode";
import { BsX } from "react-icons/bs";
import { CgArrowUpR } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { deleteWordFB, updateWordFB } from "./redux/modules/word";

const Main = (props) => {

  const dispatch = useDispatch();
  const word_list = useSelector((state) => state.word.list);
  // console.log(word_list);
  


  return (
    <>      
      <div>
        <Box className="clearfix">          
            {word_list.map((value, i) => {
              console.log(value);
              return (
                <Card completed={value.completed} className="container" key={value.my_word + i}>
                  <Title>{value.my_word}</Title>
                  <FaCheck onClick={() => { dispatch(updateWordFB(value)) }}
                    style={{
                      position: "absolute", top: "35px", right: "37px", fontSize: "13px", cursor: "pointer"
                    }}/>
                  <BsX onClick={() => {
                    dispatch(deleteWordFB(value.id));    //word_list[i].id
                  }}
                    style={{
                      position: "absolute", top: "32px", right: "17px",
                      border: "none", background: "none", fontSize: "20px", cursor: "pointer"
                    }}/>
                  <StyleSpan>뜻</StyleSpan>
                  <p>{value.my_mean}</p>
                  <StyleSpan>예시</StyleSpan>
                  <Ex>{value.my_ex}</Ex>
                </Card>
              );
            })}
        </Box>
      </div>
      <AddMode/>
      <CgArrowUpR style={{position: "fixed", bottom: "100px", right: "36px", fontSize: "45px", cursor: "pointer"}}
        onClick={() => { window.scrollTo({top: "0", left: "0", behavior: "smooth"}) }}
      />
    </>
  )
}

export default Main;

const Card = styled.div`
  background: ${(props) => props.completed ? "lightgreen" : "#fff" }
`;

const Box = styled.div`

  width: 50%;
  margin: 0 auto;
  padding-top: 130px;
  /* border: 1px solid #000; */
  box-sizing: border-box;
  p {
    font-size: 15px;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 32px;
  padding-bottom: 10px;
  display: block;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

const Ex = styled.p`
  color: blue;
`;

const StyleSpan = styled.span`
  font-size: 12px;
  color: grey;
`;
