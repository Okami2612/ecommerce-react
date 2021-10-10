import React from 'react'
import styled from 'styled-components'
import {categories} from '../dummy-data'
import {mobile, tablet } from '../responsive'
import CategoryItem from './CategoryItem';

export default function Categories() {
    return (
        <Container>
            {categories.map((item)=>(
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    ${mobile({flexDirection:"column"})}
    ${tablet({flexDirection:"column"})}
`;
