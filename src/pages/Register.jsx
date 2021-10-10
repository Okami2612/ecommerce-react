import React from "react";
import styled from "styled-components";
import {tablet} from '../responsive'

export default function Register() {
  return (
    <Container>
      <Wrapper>
        <h1>Create an Account</h1>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="User Name" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <input placeholder="Email" />
          <span>
            By create an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          
        </form>
        <Button>Sign up</Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 95vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://4kwallpapers.com/images/walls/thumbs_3t/2753.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;  
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${tablet({width:"50%"})}
    form{
        display: flex;
        flex-direction: column;        
        /* align-items: center; */
        input{
            border: none;
            border-bottom: 1px solid black;
            outline: none;
            height: 2rem;
            background: transparent;
            margin: .5rem;
            padding: .5rem;
            font-size: 1.1rem;
            
        }
        span{
            font-size: 1.2rem;
            margin: .5rem;
        }
    }
`;
const Button = styled.button`
    margin: .5rem 0;
    padding: .5rem 1rem;
    border: 2px solid #6495ed;
    background: white;
    font-size: 1.1rem;
    border-radius: .5rem;
    cursor: pointer;
    &:hover{
        background: #6495ed;
    }
`;
