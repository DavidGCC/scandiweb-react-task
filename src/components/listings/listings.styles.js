import styled from "styled-components";

import { Link } from "react-router-dom";


export const CategoryPage = styled.div`
    margin: 80px 100px;
`;

export const CategortyName = styled.h2`
    font-weight: 400;
    font-size: 42px;
    line-height: 67.2px;
    color: var(--black);
    text-transform: capitalize;
    margin: 0 0 100px 0;
`;


export const SLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
`;

// List Item (card)

export const ItemContainer = styled.div`
    width: 386px;
    height: 445px;
    margin: 0 40px 103px 0;
    display: flex;
    flex-direction: column;
    padding: 16px;
    transition: all .5s ease;
    &:hover {
        box-shadow: 0px 4px 35px 0px #A8ACB030;
    }
`;

export const ItemTop = styled.div`
    position: relative;
`;

export const ItemImage = styled.img`
    width: 354px;
    height: 330px;
    z-index: 1;
`;

export const AddToCartButton = styled.button`
    width: 52px;
    height: 52px;
    border-radius: 100%;
    border: none;
    background-color: var(--green);
    position: absolute;
    z-index: 2;
    top: calc(100% - 26px);
    left: 80%;
    transition: all .5s ease;
    &:hover {
        transform: scale(1.2, 1.2);
    }
    cursor: pointer;
`;

export const ItemBot = styled.div`
    width: 354px;
    height: 58px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding: 0px;
    font-size: 18px;
    line-height: 28.8px;
    color: var(--black);
`;

export const ItemName = styled.span`
    font-weight: 300;
    height: 29px;
`;

export const ItemPrice = styled.span`
    font-weight: 500;
`;

//