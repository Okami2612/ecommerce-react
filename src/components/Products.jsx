import React from "react";
import styled from "styled-components";
import { popularProducts } from "../dummy-data";
import Product from "./Product";

export default function Products() {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5rem 1.25rem;
`;
