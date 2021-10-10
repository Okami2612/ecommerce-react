import React from "react";
import styled from "styled-components";
import {mobile, tablet} from '../responsive'

export default function Product({ item }) {
  return (
    <Container>
      <img src={item.img} alt="" />
      <Info>
        <Icon>
          <i class="uil uil-shopping-bag"></i>
        </Icon>
        <Icon>
          <i class="uil uil-search-alt"></i>
        </Icon>
        <Icon>
          <i class="uil uil-heart"></i>
        </Icon>
      </Info>
    </Container>
  );
}

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  align-items: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  /* flex: 1;     */
  margin: 5px;
  width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfb;
  position: relative;
  ${mobile({width:"23rem"})}
  ${tablet({width:"20rem"})}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8rem;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background: transparent;
    i {
      color: white;
    }
  }
  i {
    font-size: 1.5rem;
  }
`;
