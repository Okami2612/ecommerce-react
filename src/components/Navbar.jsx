import React from "react";
import styled from "styled-components";
import {mobile , tablet} from '../responsive'

import Badge from '@mui/material/Badge';
import { ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search"/>
            <i class="uil uil-search"></i>
          </SearchContainer>
        </Left>
        <Center>
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/6293.png"
            alt=""
          />
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 3.75rem;
  margin-bottom: 2rem;
  ${mobile({height:"3rem", marginBottom:"3rem"})}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
  ${mobile({padding:"10px 0"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({justifyContent:"center", flex:"2", margin:".75rem"})}
`;
const Center = styled.div`
  flex: 1;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
    ${mobile({height:"3rem", width:"3rem"})}
    ${tablet({height:"3rem", width:"3rem"})}
  }
`;

const Language = styled.span`
  font-size: 0.875rem;
  cursor: pointer;
  ${mobile({display:"none"})}
`;

const SearchContainer = styled.div`
  outline: none;
  display: flex;
  align-items: center;
  margin-left: 25px;  
  /* padding: 0.25rem; */
  border: 1px solid gray;
    ${tablet({padding:"0", margin:"0 .5rem"})}
  ${mobile({border:"none"})}
  i{
      font-size: 1.2rem;
      color: #778899;
      padding: .25rem;
      ${mobile({fontSize:"1.5rem"})}
  }
`;

const Input = styled.input`
  border: none;
  padding: 0.5rem;    
  ${mobile({display:"none"})}
`;

const MenuItem = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
  margin-left: 1.5rem;
  ${mobile({fontSize:"1rem"})}
`;
