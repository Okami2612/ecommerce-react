import React from 'react'
import styled from 'styled-components'
import {mobile, tablet} from '../responsive'

export default function CategoryItem({item}) {
    return (
        <Container>
            <img src={item.img} alt=""/>
            <Info>
                <Title>{item.title}</Title>
                <Button>Shop now</Button>
            </Info>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${mobile({height:"30vh"})}
        ${tablet({height:"30vh"})}
    }
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    background: white;
    color: gray;
    padding: 1rem;
    font-size: 1.1rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .3s ease;
    &:hover {
        transform: scale(1.2);
    }
`;