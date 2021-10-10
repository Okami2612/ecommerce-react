import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

export default function Cart() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <h1>Your bag</h1>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <span>Shopping bag (5)</span>
            <span>Your Wishlist (0)</span>
          </TopTexts>
          <TopButton type="filled">Check out now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs_3t/3655.jpg"
                  alt=""
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> Lorem ipsum
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 01
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <i class="uil uil-minus"></i>
                  <Amount>1</Amount>
                  <i class="uil uil-plus"></i>
                </ProductAmountContainer>
                <ProductPrice>$ 1.000.000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetails>
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs_3t/3655.jpg"
                  alt=""
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> Lorem ipsum
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 01
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <i class="uil uil-minus"></i>
                  <Amount>1</Amount>
                  <i class="uil uil-plus"></i>
                </ProductAmountContainer>
                <ProductPrice>$ 1.000.000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetails>
                <img
                  src="https://4kwallpapers.com/images/walls/thumbs_3t/3655.jpg"
                  alt=""
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> Lorem ipsum
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 01
                  </ProductId>
                  <ProductColor color="blue" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <i class="uil uil-minus"></i>
                  <Amount>1</Amount>
                  <i class="uil uil-plus"></i>
                </ProductAmountContainer>
                <ProductPrice>$ 1.000.000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
              <h1>Order Summary</h1>
              <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>                
                  <SummaryItemPrice>$ 1.000.000</SummaryItemPrice>                
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>                
                  <SummaryItemPrice>$ 100</SummaryItemPrice>                
              </SummaryItem>
              <SummaryItem>
                  <SummaryItemText>Shipping Discount</SummaryItemText>                
                  <SummaryItemPrice>$ 100</SummaryItemPrice>                
              </SummaryItem>
              <SummaryItem type="total">
                  <SummaryItemText>Total</SummaryItemText>                
                  <SummaryItemPrice>$ 1.000.000</SummaryItemPrice>                
              </SummaryItem>
              <SummaryButton>Check Out</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 2rem;
  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopButton = styled.button`
  padding: 1rem;
  cursor: pointer;
  font-size: 1.1rem;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  span {
    text-decoration: underline;
    cursor: pointer;
    margin: 0 1rem;
  }
`;
const Bottom = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
  img {
    width: 11.5rem;
    height: 11.5rem;
    object-fit: cover;
  }
`;
const Details = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    i{
        font-size: 1.25rem;
    }
`;
const Amount = styled.span`
    font-size: 1.25rem;
    margin: 0 1rem;
    padding: .5rem;
    border-radius: .25rem;
    border: 1px solid #6495ed;
`;
const ProductPrice = styled.span`
    font-size: 1.5rem;
`;
const Hr = styled.hr`
    background: #eee;
    border: none;
    height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: .75rem;
  padding: 0 2rem;
  height: 65vh;
  h1{
      font-size: 3rem;
  }
`;
const SummaryItem = styled.div`
    margin: 4rem 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "600"};
    font-size: ${props=>props.type === "total" && "1.3rem"};
`;
const SummaryItemText = styled.span`
    font-size: 1.1rem;
`;
const SummaryItemPrice = styled.span`
    font-size: 1.1rem;
`;
const SummaryButton = styled.button`
    width: 100%;
    height: 2.5rem;
    font-size: 1.1rem;
    background: black;
    color: white;
    text-transform: uppercase;
    letter-spacing: 10px;
    cursor: pointer;
`;
