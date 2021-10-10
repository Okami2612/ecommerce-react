import React from "react";
import styled from "styled-components";
import {mobile} from '../responsive'

export default function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Keep up with updated products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <i class="uil uil-message"></i>
        </Button>
      </InputContainer>
    </Container>
  );
}

const Container = styled.div`
  background: #fcf5f5;
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;
const Title = styled.h1`
  font-size: 5rem;
`;
const Desc = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 3rem;
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({width:"80%"})}

`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 9;
  height: 90%;
  font-size: 1.1rem;
  text-align: center;
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  cursor: pointer;
  i {
    font-size: 1.5rem;
  }
`;
