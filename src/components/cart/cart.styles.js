import styled from "styled-components";
import { Link } from "react-router-dom";

export const SLink = styled(Link)`
    text-decoration: none;
`;

export const CartContainer = styled.div`
    width: 100%;
    padding: 80px 16vw 54px 7vw;
`;

export const CartLabel = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    height: 40px;
    text-transform: uppercase;
    width: 6vw;
    margin-bottom: 60px;
`;

export const CartItems = styled.div`

`;

export const CartItemContainer = styled.div`
    border-top: 1px solid #e5e5e5;
    width: 76vw;
    min-height: 205px;
    display: flex;
    flex-direction: row;
    margin: 20px 0;
`;

export const CartItemDetailsContainer = styled.div`
    width: 100%;
`;

export const CartItemActionsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 20px 0.8vw 0 0;
    height: 100%;
`;


export const CartItemName = styled.span`
    display: block;
    &::first-line {
        font-weight: 600;
    }
    font-size: 30px;
    margin: 20px 0 55px 0;
    width: 20vw;
    height: 27px;
    font-weight: 400;
    color: var(--black);
    line-height: 27px;
    &:hover {
        color: var(--green);
    }
`;

export const ItemNameLink = styled(Link)`
    text-decoration: none;
`;

export const CartItemPrice = styled.span`
    display: block;
    font-weight: 700;
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    font-size: 27px;
    height: 45px;
`;

export const CartCountButton = styled.button`
    background-color: #fff;
    border: 1px solid var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    user-select: none;
`;

export const CartItemCount = styled.span`
    font-size: 500;
    font-size: 24px;
    line-height: 160%;
    color: var(--black);
`;

export const CartItemImageContainer = styled.div`
    position: relative;
    margin-top: 20px;
    width: 9.792vw;
    height: 185px;
    z-index: 5;
    user-select: none;

    img {
        width: 9.792vw;
        height: 100%;
        object-fit: contain;
    }
`;

export const CartArrows = styled.div`
    position: absolute;
    z-index: 6;
    top: 40%;
    left: 40%;
    height: 20%;
    width: 1.5vw;
    display: flex;
    align-items: center;
    background-color: #00000080;
    cursor: pointer;
`;


export const CartArrowPrevious = styled(CartArrows)`
    border-radius: 0 50% 50% 0;
    justify-content: flex-start;
    left: 0;
    padding-left: 5px;
`;

export const CartArrowNext = styled(CartArrows)`
    border-radius: 50% 0 0 50%;
    justify-content: flex-end;
    left: calc(100% - 1.5vw);
    padding-right: 5px;
`;

export const TotalPriceContainer = styled.div`
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 40px;
    width: 76vw;
    text-align: right;
`;

export const TotalPriceLabel = styled.span`
    margin-right: 15px;
    font-family: "Roboto", sans-serif;
`

export const TotalPriceNumber = styled.span`
    font-family: "Raleway", sans-serif;
`;