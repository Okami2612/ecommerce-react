import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <img
            src="https://4kwallpapers.com/images/walls/thumbs_3t/220.jpg"
            alt=""
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Toyota GR Supra 2.0</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Desc>
          <Price>$ 1.000.000</Price>
          <FilterContainer>
            <Filter>
              <span>Color</span>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <span>Size</span>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <i class="uil uil-minus"></i>
              <Amount>1</Amount>
              <i class="uil uil-plus"></i>
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 3.25rem;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3.25rem;
`;
const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
`;
const Desc = styled.p`
  padding: 2rem 0;
`;
const Price = styled.span`
  font-size: 2rem;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  width: 50%;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 1.1rem;
  }
  select {
    margin-left: 0.5rem;
    padding: 0.5rem;
  }
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.75rem;
  cursor: pointer;
`;
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    margin: 3.25rem 0;
    justify-content: space-between;
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    i{
        font-size: 1.8rem;
    }   
`;
const Amount = styled.span`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #6495ed;
    margin: 0 .5rem;
`;
const Button = styled.button`
    padding: 1rem;
    border: 2px solid #6495ed;
    background: white;
    font-size: 1.1rem;
    border-radius: .5rem;
    cursor: pointer;
    &:hover{
        background-color: #6495ed;
        color: #191919;
    }
`;
