import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <h1>Log in</h1>
        <form>
          <input placeholder="User Name" />
          <input placeholder="Password" />
        </form>
        <span>
          <a href="">Forgot password</a>
        </span>
        <span>
          Do not have account yet? <a href="">Create an Account</a>
        </span>
        <Button>Sign up</Button>
        <SocialLink>
          <p>Log in with</p>
          <i class="fa-brands fa-facebook-square"></i>
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-github"></i>
        </SocialLink>
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
    url("https://4kwallpapers.com/images/walls/thumbs_3t/6273.jpeg");
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
  form {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    input {
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      height: 2rem;
      background: transparent;
      margin: 0.5rem;
      padding: 0.5rem;
      font-size: 1.1rem;
    }
  }
  span {
    margin: 0.75rem;
    font-size: 1.1rem;
    a {
      text-decoration: none;
      font-size: 1.2rem;
    }
  }
`;
const Button = styled.button`
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: 2px solid #6495ed;
  background: white;
  font-size: 1.1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #6495ed;
  }
`;
const SocialLink = styled.div`
  p {
    text-align: center;
    font-size: 1.2rem;
  }
  i {
    margin: 0 1rem;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .fa-github:hover {
    color: #3194d4;
    transform: scale(1.5);
  }
  .fa-google:hover {
    color: #e34133;
    transform: scale(1.5);
  }
  .fa-facebook-square:hover {
    color: #395693;
    transform: scale(1.5);
  }
`;
