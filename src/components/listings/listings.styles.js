import styled from "styled-components";

import { Link } from "react-router-dom";


export const CategoryPage = styled.div`
    margin: 80px 7vw 191px 7vw;
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

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2.7vw;
    row-gap: 103px;
`;

// List Item (card)

export const ItemContainer = styled.div`
    width: 27vw;
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
    width: 25vw;
    height: 22vw;
`;

export const AddToCartButton = styled.button`
    width: 52px;
    height: 52px;
    border-radius: 100%;
    border: none;
    background-color: var(--green);
    position: absolute;
    top: calc(100% - 26px);
    left: 80%;
    transition: all .5s ease;
    &:hover {
        transform: scale(1.2, 1.2);
    }
    cursor: pointer;
`;

export const ItemBot = styled.div`
    margin-top: 24px;
    width: 25vw;
    height: 58px;
    display: flex;
    flex-direction: column;
    padding: 0px;
    font-size: 18px;
    line-height: 28.8px;
    color: var(--black);
`;

export const ItemName = styled.span`
    color: ${props => props.inStock ? "var(--black)" : "var(--gray)"};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    width: 25vw;
    word-wrap: normal;
    font-weight: 300;
    min-height: 29px;
`;

export const ItemPrice = styled.span`
    color: ${props => props.inStock ? "var(--black)" : "var(--gray)"};
    display: block;
    font-weight: 500;
    width: auto;
    height: 29px;
`;

export const OutOfStockOverlay = styled.div`
    width: 25vw;
    height: 23vw;
    position: absolute;
    opacity: 0.5;
    left: 0;
    top: -5px;
    background-color: #fff;
    display: flex;
`;

export const OutOfStockText = styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 38.4px;
    text-transform: uppercase;
    margin: auto;
    color: var(--gray);
`;

//