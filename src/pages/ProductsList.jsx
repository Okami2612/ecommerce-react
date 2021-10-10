import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function ProductsList() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <h1>Lorem ipsum</h1>
      <FilterComtainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
              <Option disabled selected>
                  Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Blue</Option>
              <Option>Red</Option>
              <Option>Yellow</Option>
          </Select>
          <Select>
              <Option disabled selected>
                  Size
              </Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterComtainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
const FilterComtainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div``;
const FilterText = styled.span`
  font-size: 1.1rem;
  margin-right: .5rem;
`;
const Select = styled.select`
    padding: .5rem;
    margin-right: .5rem;    
`;
const Option = styled.option``;
