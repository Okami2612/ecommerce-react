import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

export default function Footer() {
  return (
    <Container>
      <Left>
        <img
          src="https://4kwallpapers.com/images/walls/thumbs_3t/6293.png"
          alt=""
        />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <SocialContainer>
          <i class="uil uil-facebook" style={{ color: "#395693" }}></i>
          <i class="uil uil-github" style={{ color: "#616060" }}></i>
          <i class="uil uil-linkedin" style={{ color: "#0270AD" }}></i>
          <i class="fa-brands fa-codepen" style={{ color: "#616060" }}></i>
        </SocialContainer>
      </Left>
      <Center>
        <h3>Userful links</h3>
        <ul>
          <li>
            <a href=""></a>Home
          </li>
          <li>
            <a href=""></a>Cart
          </li>
          <li>
            <a href=""></a>Lorem ipsum
          </li>
          <li>
            <a href=""></a>Lorem ipsum
          </li>
          <li>
            <a href=""></a>Lorem ipsum
          </li>
          <li>
            <a href=""></a>Lorem ipsum
          </li>
          <li>
            <a href=""></a>Wish list
          </li>
          <li>
            <a href=""></a>Terms
          </li>
        </ul>
      </Center>
      <Right>
        <h3>Contact</h3>
        <ContactItem>
          <i class="uil uil-map-marker"></i>27A Le Quy Don, Nha Trang, Viet Nam
        </ContactItem>
        <ContactItem>
          <i class="uil uil-mobile-android"></i>+84 935 909 788
        </ContactItem>
        <ContactItem>
          <i class="uil uil-envelope"></i>metallica91@gmail.com
        </ContactItem>
        <Payments
          src="https://icon-library.com/images/paypal-credit-card-icon/paypal-credit-card-icon-19.jpg"
          alt=""
        />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
  p {
    font-size: 1rem;
    margin: 1.5rem 0;
    color: #616060;
  }
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  i {
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    ${mobile({ fontSize: "1.8rem" })}
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const Center = styled.div`
  padding: 1.5rem;
  flex: 1;
  h3 {
    margin-bottom: 1.5rem;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      margin-bottom: 10px;
      font-size: 1rem;
    }
  }
`;
const Right = styled.div`
  padding: 1.5rem;
  flex: 1;
  ${mobile({ background: "lightgray" })}
  ${tablet({ flex: "2" })}
`;
const ContactItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  ${mobile({ fontSize: "1rem" })}
  ${tablet({ fontSize: "1rem" })}

  i {
    color: #6495ed;
    margin-right: 0.5rem;
  }
`;
const Payments = styled.img`
  width: 50%;
  ${mobile({ width: "80%" })}
  ${tablet({ width: "80%" })}
`;
