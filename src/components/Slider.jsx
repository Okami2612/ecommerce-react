import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../dummy-data";
import {mobile ,tablet} from '../responsive'

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
      if(direction === "left"){
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      }else{
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} >
            <ImgContainer>
              <img src={item.img} alt="" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none"})}
  ${tablet({height:"45vh", marginBottom:"3rem"})}
  

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background-color: #fff7f7; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
  svg {
    font-size: 5rem;
  ${tablet({fontSize:"3rem"})}
  }
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 2rem 4.5rem 0 4.5rem;
  display: flex;
  transform: translateX(${props=>props.slideIndex * -100}vw);
  transition: all 1.5s ease;
  ${tablet({width:"100%"})}
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  ${tablet({height:"50vh", width:"100vw"})}
`;
const ImgContainer = styled.div`
  height: 100%;
  ${tablet({width:"25rem", height:"25rem"})}
  img {
    height: 80%;
    ${tablet({width:"100%", height:"100%", objectFit:"cover"})}
  }
`;
const InfoContainer = styled.div`
  margin: 1rem;  
  ${tablet({width:"25rem", padding:"1rem"})}
`;

const Title = styled.h1`
  font-size: 4rem;  
  ${tablet({fontSize:"2rem"})}
`;
const Desc = styled.p`
  font-size: 1.2rem;
  margin: 50px 0;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 1rem;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  ${tablet({padding:".5rem"})}
`;
