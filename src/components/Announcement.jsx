import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background: teal;
  color: white;
  text-align: center;
  font-size: 1.1rem;
  padding: .5rem;
`;

export default function Announcement() {
  return <Container>Super deal! Free shipping on order Over 500k</Container>;
}
